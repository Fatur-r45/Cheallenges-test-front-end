import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";
import { Article } from "./types"; // Create this type based on your API response

const NewsContainer: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const api_key = "0432cb5ca7df45c3a93985e8fbc5e19c";

  useEffect(() => {
    // Fetch articles from NewsAPI and update the state
    async function fetchArticles() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${api_key}`
        );
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ textAlign: "center", width: "60%" }}>
        <h1>News Articles</h1>
        {loading ? (
          <Spin size="large" />
        ) : (
          <div>
            <ArticleList articles={articles} onItemClick={handleArticleClick} />
            <ArticleDetail article={selectedArticle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsContainer;
