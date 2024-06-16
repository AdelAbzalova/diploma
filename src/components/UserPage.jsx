import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row, Button, Avatar, Card } from "antd";
import ContactModal from "./ContactModal";
function UserPage() {
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.filter((user) => user.id == id)[0];
  const [isContact, setIsContact] = useState(false);
  return (
    <div style={{ marginTop: 150 }}>
      <Row gutter={[20, 16]} justify="space-around">
        <Col>
          <Row gutter={[20, 16]} justify="space-around">
            <Col>
              <Avatar
                style={{ backgroundColor: user.avatar, fontSize: 100 }}
                size={200}
              >
                {user.name[0]}{" "}
              </Avatar>
            </Col>
            <Col>
              <h1 style={{ fontSize: 30 }}>{user.name}</h1>
              <h2 style={{ color: "grey" }}>{user.city}</h2>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Card style={{ textAlign: "start" }}>
            <Row gutter={[16, 16]} justify="start">
              <Col>
                <strong>Возраст:</strong> {user.age} лет
              </Col>
              <Col span={24}>
                <strong>Количество детей:</strong> {user.childAmount}
              </Col>
              <Col span={24}>
                <strong>Пол:</strong> {user.gender}{" "}
              </Col>
              <Col span={24}>
                <strong>Желаемый питомец:</strong> {user.wanted}
              </Col>
              <Col span={24}>
                <strong>Тип помощи:</strong> {user.type}
              </Col>
              <Col span={24}>
                <strong>Количество человек в семье:</strong> {user.member}
              </Col>
              <Col span={24}>
                <strong>Тип жилья:</strong> {user.house}
              </Col>
              <Col span={24}>
                <strong>Жилищные отношения:</strong> {user.houseRelation}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row justify="center" style={{ margin: 30 }}>
        <Button onClick={() => setIsContact(true)} style={{ width: "30%" }}>
          Связаться
        </Button>
      </Row>
      <ContactModal setIsContact={setIsContact} isContact={isContact} />
    </div>
  );
}
export default UserPage;
