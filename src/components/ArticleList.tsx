import { List, Avatar } from "antd";
import { Article } from "./types"; // Create this type based on your API response

interface ArticleListProps {
  articles: Article[];
  onItemClick: (article: Article) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, onItemClick }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={articles}
      renderItem={(article) => (
        <List.Item onClick={() => onItemClick(article)}>
          <List.Item.Meta
            avatar={<Avatar src={article.urlToImage} />}
            title={<a href={article.url}>{article.title}</a>}
            description={article.description}
          />
        </List.Item>
      )}
    />
  );
};

export default ArticleList;
