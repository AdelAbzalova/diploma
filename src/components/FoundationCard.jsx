import { Card } from "antd";
function FoundationCard({ name, img, src }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Card
        hoverable
        style={{ fontSize: 20, minHeight: "45vh" }}
        cover={
          <img alt="example" src={require(`../images/foundations/${img}`)} />
        }
      >
        <em style={{ fontSize: 18, fontWeight: 700 }}>{name}</em>
      </Card>
    </a>
  );
}

export default FoundationCard;
