import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type ArticleType = {
  id: string;
  title: string;
  content: string;
};

export default function SingleArticle() {
  const { id } = useParams();
  const articleId = Array.isArray(id) ? id[0] : id;

  const [article, setArticle] = useState<ArticleType | null>(null);
  const [loading, setLoading] = useState(true);
  const [savedArticle, setSavedArticle] = useState(false)
  const [editorReady, setEditorReady] = useState(false);

  const navigate = useNavigate();

  const editorRef = useRef<any>(null);
  const articleIdRef = useRef<string>(articleId);
  articleIdRef.current = articleId;

  const hasInitialized = useRef(false);

  // Načtení článku z backendu
  useEffect(() => {
    if (!articleId) return;

    const fetchArticle = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/articles/article/${articleId}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(articleId),
          }
        );

        if (res.ok) {
          const data = await res.json();
          setArticle(data);
        } else {
          console.error("Chyba při načítání článku:", res.statusText);
        }
      } catch (err) {
        console.error("Chyba při fetchi článku:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  // Inicializace EditorJS
  useEffect(() => {
    if (!article || hasInitialized.current) return;
    hasInitialized.current = true;

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

      const editor = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        data: article.content
          ? JSON.parse(article.content)
          : { time: Date.now(), blocks: [] },
        onReady: () => {
          console.log("Editor ready");
          editorRef.current = editor;
          setEditorReady(true);
        },
        tools: {
          header: Header,
          paragraph: Paragraph,
          image: {
            class: ImageTool,
            inlineToolbar: true,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  console.log("🔹 Upload file:", file.name);
                  console.log("🔹 Article ID:", articleIdRef.current);

                  const formData = new FormData();
                  formData.append("file", file);
                  formData.append("articleId", articleIdRef.current);

                  const response = await fetch(
                    "http://localhost:8080/articles/saveImg",
                    { method: "POST", body: formData }
                  );

                  if (!response.ok) throw new Error("Upload failed");

                  const data = await response.json();
                  const url = `http://localhost:8080/articles/img/${
                    data.id ?? data
                  }`;

                  console.log("🔹 Uploaded URL:", url);

                  return {
                    success: 1,
                    file: { url },
                  };
                },
              },
            },
          },
          list: List,
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                vimeo: true,
              },
            },
          },
          marker: Marker,
        },
      });
    };

    initEditor();

    return () => {
      editorRef.current?.destroy?.();
      editorRef.current = null;
      setEditorReady(false);
    };
  }, [article]);

  const handleSave = async () => {
    console.log("🔹 handleSave called");

    if (!editorReady || !editorRef.current) {
      console.log("❌ Editor ještě není připravený");
      return;
    }

    try {
      const outputData = await editorRef.current.save();
      console.log("🔹 outputData:", outputData);

      await fetch("http://localhost:8080/articles/updateArticle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: articleIdRef.current,
          content: JSON.stringify(outputData),
        }),
      });

      console.log("✅ Článek uložen!");
      setSavedArticle(true)
    } catch (err) {
      console.error("❌ Chyba při ukládání článku:", err);
    }
  };

  if (loading) return <p>Načítám článek...</p>;
  if (!article) return <p>Článek nenalezen</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4 text-seven">editace článku</h1>

      <div
        id="editorjs"
        className="border rounded-lg p-4 min-h-[200px] min-w-[300px]"
      />

      <button
        onClick={handleSave}
        disabled={!editorReady}
        className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded mr-3 ${
          !editorReady ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Uložit článek
      </button>
      <button 
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => navigate("/allArticles")}>zpět</button>
      {savedArticle && <p className="text-one">článek uložen</p>}
    </div>
  );
}
