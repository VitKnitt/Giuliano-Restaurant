"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const findSingleItem = async () => {
      try {
        setLoading(true);

        const result = await fetch(
          `http://localhost:8080/articles/allArticles`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (result.status === 200) {
          const data = await result.json();
          setArticles(data);
        } else {
          console.log("Internal error");
        }
      } catch (err) {
        console.log("Fetch single article failed:", err);
      } finally {
        setLoading(false);
        console.log(JSON.stringify(articles, null, 2));
      }
    };

    findSingleItem();
  }, []);

  

  const handleDeleteArticle = async (id: number) => {
    try {
      const res = await fetch("http://localhost:8080/articles/deleteArticle", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });
      if (res.ok) {
        console.log("article deleted");
        window.location.reload();
      } else {
        console.log("error, article wasnt deleted");
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <article className="p-8 md:p-16 bg-ten min-h-screen flex justify-center items-center">
      <article className="p-8 md:p-16 bg-ten min-h-screen">
        {loading ? (
          <div className="flex justify-center items-center h-full"></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article: any) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow p-6 flex flex-col justify-around"
              >
                <div
                  className="hover:shadow-lg transition cursor-pointer"
                  onClick={() => navigate(`/allArticles/${article.id}`)}
                >
                  <h2 className="text-seven">
                    {JSON.parse(
                      article.content
                    )?.blocks?.[0]?.data?.text?.slice(0, 500)}
                  </h2>
                  {article.images.length > 0 && (
                    <img
                      src={`data:image/${article.images[0].content_type};base64,${article.images[0].image}`}
                      alt="article image"
                      width={400}
                      height={300}
                    />
                  )}
                </div>
                <button
                  type="button"
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDeleteArticle(article.id)}
                >
                  delete❌
                </button>
              </div>
            ))}
          </div>
        )}
      </article>
    </article>
  );
};

export default AllArticles;
