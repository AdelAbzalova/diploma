import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

function UserCard({ id, name, city, wanted, type, avatar }) {
  let animal;
  switch (wanted) {
    case "Кошка":
      animal = "кошку";
      break;
    case "Собака":
      animal = "собаку";
      break;
    case "Любое":
      animal = "любое животное";
      break;
  }
  let helpingType;
  switch (type) {
    case "Передержка":
      helpingType = "передержку";
      break;
    case "Забрать":
      helpingType = "постоянное проживание";
      break;
  }
  return (
    <Link to={`/users/${id}`} style={{ textDecoration: "none" }}>
      <Card
        hoverable
        style={{
          width: 300,
          height: 160,
          marginTop: 20,
        }}
      >
        <Meta
          avatar={
            <Avatar style={{ backgroundColor: avatar }} size={50}>
              {name[0]}
            </Avatar>
          }
          title={<div style={{ textAlign: "start" }}>{name}</div>}
          description={<div style={{ textAlign: "start" }}>{city}</div>}
        />
        <p style={{ marginTop: 20 }}>
          Возьму <em>{animal}</em> на <em>{helpingType}</em>
        </p>
      </Card>
    </Link>
  );
}

export default UserCard;
