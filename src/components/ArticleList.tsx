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
        pageSize: 4,
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
            <div
              style={{
                width: "275px",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxWidth: "275px", objectFit: "cover" }}
                alt="logo"
                src={item.urlToImage}
              />
            </div>
          }
        >
          <List.Item.Meta
            title={
              <div>
                <a>{item.title}</a>
                <p style={{ color: "rgba(0,0,0,0.6)" }}>{item.source.name}</p>
              </div>
            }
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default ArticleList;
