import { Card } from "antd";
import { Article } from "./types"; // Create this type based on your API response

interface ArticleDetailProps {
  article: Article | null;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  if (!article) {
    return null;
  }

  return (
    <Card title={article.title}>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </Card>
  );
};

export default ArticleDetail;
