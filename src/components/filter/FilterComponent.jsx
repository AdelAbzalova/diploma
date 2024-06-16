import { Button, Col, Form, Row } from "antd";
import { useDispatch } from "react-redux";
import { petsActions } from "../../store/petsSlice";
import AgeFilter from "./AgeFilter";
import CityFilter from "./CityFilter";
import GenderFilter from "./GenderFilter";
import TypeFilter from "./TypeFilter";

const FilterComponent = () => {
  const dispatch = useDispatch();
  return (
    <Form
      layout="vertical"
      size="large"
      style={{
        border: "1px solid #f7f8fa",
        borderRadius: 10,
        boxShadow: "0 0 8px #e6e6e6",
        backgroundColor: "#f7f8fa",
      }}
    >
      <Row justify="center">
        <Col span={10}>
          <Form.Item label="Возраст" style={{ marginLeft: 10 }}>
            <AgeFilter />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="Пол" style={{ marginLeft: 10 }}>
            <GenderFilter />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={10}>
          <Form.Item label="Город" style={{ marginLeft: 10 }}>
            <CityFilter />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="Питомец" style={{ marginLeft: 10 }}>
            <TypeFilter />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Form.Item>
          <Button danger onClick={() => dispatch(petsActions.clearFilters())}>
            Очистить фильтры
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default FilterComponent;
