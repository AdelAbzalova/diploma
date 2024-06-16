import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Image, Row, Button, Card } from "antd";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
function PetPage() {
  const { id } = useParams();
  const pets = useSelector((state) => state.pets.pets);
  const pet = pets.filter((pet) => pet.id == id)[0];
  const [isContact, setIsContact] = useState(false);
  return (
    <div style={{ marginTop: 150 }}>
      <Row gutter={[20, 16]} justify="center">
        <Col xs={20} sm={20} md={8} lg={6}>
          <div>
            <Row gutter={[0, 48]} justify="center">
              <Col>
                <Image
                  src={require(`../img-json/${pet.avatar}`)}
                  style={{ width: "100%" }}
                  alt="постер"
                />
              </Col>
            </Row>
            <Row justify="center" style={{ marginTop: 20 }}>
              <Col span={24}>
                <Button
                  type="primary"
                  onClick={() => setIsContact(true)}
                  style={{ width: "100%" }}
                >
                  Взять питомца
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Link to="/pets" style={{ textDecoration: "none" }}>
                  <Button style={{ width: "100%", marginTop: "20px" }}>
                    Назад к списку животных
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={8}>
          <Card style={{ textAlign: "start", marginBottom: 20 }}>
            {/* <Col> */}
            <Row gutter={[16, 16]} justify="start">
              <Col>
                <div style={{ fontSize: 30, fontWeight: 700 }}>{pet.name}</div>
              </Col>
              <Col span={24}>
                <div style={{ color: "grey", fontSize: 20 }}>{pet.city}</div>
              </Col>

              <Col span={24}>
                <strong>Возраст:</strong> {pet.age}
              </Col>
              <Col span={24}>
                <strong>Пол:</strong> {pet.gender}{" "}
              </Col>
              <Col span={24}>
                <strong>Размер:</strong>
                {pet.size}
              </Col>

              <Col span={24}>
                <strong>Шерсть:</strong>
                {pet.wool}{" "}
              </Col>
              <Col span={24}>
                <strong>Окрас:</strong> {pet.color}{" "}
              </Col>
              <Col span={24}>
                <strong>Стерилизация/кастрация:</strong>
                {pet.sterilization}
              </Col>
              <Col span={24}>
                <strong>Обработка от паразитов:</strong> {pet.antiParasite}
              </Col>
              <Col span={24}>
                <strong>Вакцинация:</strong>
                {pet.vaccination}{" "}
              </Col>
              <Col span={24}>
                <strong>Темперамент:</strong>
                {pet.temperament}{" "}
              </Col>
              <Col span={24}>
                <strong>Отношение к кошкам:</strong> {pet.catRel}
              </Col>
              <Col span={24}>
                <strong>Отношение к собакам:</strong> {pet.dogRel}{" "}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <ContactModal setIsContact={setIsContact} isContact={isContact} />
    </div>
  );
}
export default PetPage;
