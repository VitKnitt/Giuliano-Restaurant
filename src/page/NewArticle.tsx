import { useEffect, useRef, useState } from "react";

export default function NewArticle() {
  const editorRef = useRef<any>(null);
  const [created, setCreated] = useState<boolean>(false);
  const [articleCounter, setArticleCounter] = useState<string>("");
  const [savedArticle, setSavedArticle] = useState(false)
  const [hidden, setHidden] = useState<boolean>(true);

  type ArticleType = {
    id: number;
    title: string;
    content: string;
    created_At: string;
  };

  useEffect(() => {
    let EditorJS: any;
    let Header: any;
    let Paragraph: any;
    let ImageTool: any;
    let List: any;
    let Embed: any;
    let Marker: any;

    const initEditor = async () => {
      EditorJS = (await import("@editorjs/editorjs")).default;
      Header = (await import("@editorjs/header")).default;
      Paragraph = (await import("@editorjs/paragraph")).default;
      ImageTool = (await import("@editorjs/image")).default;
      List = (await import("@editorjs/list")).default;
      Embed = (await import("@editorjs/embed")).default;
      Marker = (await import("@editorjs/marker")).default;

      if (!editorRef.current) {
        const editor = new EditorJS({
          holder: "editorjs",
          autofocus: true,
          tools: {
            header: {
              class: Header,
              inlineToolbar: true,
            },
            paragraph: {
              class: Paragraph,
              inlineToolbar: true,
            },
            list: {
              class: List,
              inlineToolbar: true,
            },
            embed: {
              class: Embed,
              config: {
                services: {
                  youtube: true,
                  vimeo: true,
                },
              },
            },
            marker: {
              class: Marker,
              inlineToolbar: true,
            },
            image: {
              class: ImageTool,
              inlineToolbar: true,
              config: {
                uploader: {
                  async uploadByFile(file: File) {
                    console.log("🔹 Uploading file:", file.name);
                    console.log("🔹 Article ID:", articleCounter);

                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("articleId", articleCounter + "");

                    const response = await fetch(
                      "http://localhost:8080/articles/saveImg",
                      {
                        method: "POST",
                        body: formData,
                      }
                    );

                    if (!response.ok) throw new Error("Upload failed");
                    const data = await response.json();

                    console.log("✅ Uploaded image ID:", data);

                    return {
                      success: 1,
                      file: {
                        url: `http://localhost:8080/articles/img/${data.id ?? data}`,
                      },
                    };
                  },
                },
              },
            },
          },
        });

        editorRef.current = editor;
        await editor.isReady;
        console.log("✅ Editor ready!");
      }
    };

    // Spustíme editor až když máme articleCounter
    if (created && articleCounter) {
      initEditor();
    }

    return () => {
      editorRef.current?.destroy?.();
      editorRef.current = null;
    };
  }, [created, articleCounter]);

  const handleSave = async () => {
    if (!editorRef.current) return;
    const outputData = await editorRef.current.save();
    console.log("🔹 Ukládám JSON:", outputData);

    await fetch("http://localhost:8080/articles/updateArticle", {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: JSON.stringify(outputData),
        id: articleCounter,
      }),
    });

    console.log("✅ Článek uložen!");
    setSavedArticle(true)
  };

  const handleCreate = async () => {
    try {
      await fetch("http://localhost:8080/articles/createArticle", {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author_id: 1,
          created_at: new Date(),
        }),
      });

      console.log("✅ Article created");

      // Najdi poslední ID článku
      const result = await fetch("http://localhost:8080/articles/allArticles");
      const data = await result.json();
      const ids: number[] = data.map((a: ArticleType) => a.id);
      ids.sort((a, b) => a - b);
      const lastId = ids[ids.length - 1];
      setArticleCounter(lastId + "");
      setHidden(false);
      setCreated(true);
    } catch (err) {
      console.log("❌ Creating article failed:", err);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Nový článek</h1>

      <div
        id="editorjs"
        className={`border rounded-lg p-4 min-h-[300px] ${
          hidden ? "invisible" : "visible"
        }`}
      />

      <button
        onClick={handleSave}
        className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded ${
          hidden ? "invisible" : "visible"
        }`}
      >
        💾 Uložit článek
      </button>

      <button
        onClick={handleCreate}
        className={`mt-4 bg-green-500 text-white px-4 py-2 rounded ${
          hidden ? "visible" : "invisible"
        }`}
      >
        ➕ Vytvoř článek
      </button>
      {savedArticle && <p className="text-one">článek uložen</p>}
    </div>
  );
}
