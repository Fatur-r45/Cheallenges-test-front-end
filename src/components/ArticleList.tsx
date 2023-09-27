import { List } from "antd";
import { Article } from "./types"; // Create this type based on your API response

interface ArticleListProps {
  articles: Article[];
  onItemClick: (article: Article) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, onItemClick }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={articles}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          onClick={() => onItemClick(item)}
          extra={
            <img
              style={{ maxWidth: "275px", objectFit: "cover" }}
              alt="logo"
              src={item.urlToImage}
            />
          }
        >
          <List.Item.Meta
            title={<a>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default ArticleList;
