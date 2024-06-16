import { Button, Form, Input, Modal, Select, InputNumber } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../store/usersSlice";
function UserModal({ setIsFormOpen, isFormOpen }) {
  const { users } = useSelector((state) => state.users);
  const [animal, setAnimal] = useState("");
  const [house, setHouse] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [childAmount, setChildAmount] = useState(0);
  const [member, setMember] = useState(1);
  const [helpingType, setHelpingType] = useState("");
  const [name, setName] = useState("");
  const [other, setOther] = useState("");
  const [houseRelation, setHouseRelation] = useState("");
  let isEmpty = checkEmpty();
  const dispatch = useDispatch();
  const colors = [
    "#FFFFCC",
    "#FFCC66",
    "#FF9900",
    "#FFCC99",
    "#FF6633",
    "#FFCCCC",
    "#CC9999",
    "#FF6699",
    "#FF99CC",
    "#FF66CC",
    "#CC99CC",
    "#CC66FF",
    "#9966CC",
    "#3333FF",
    "#0066FF",
    "#99FF99",
    "#CCCC66",
  ];
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleCancel = () => {
    setIsFormOpen(false);
  };
  const handleOkForm = (e) => {
    if (!isEmpty) {
      setIsFormOpen(false);
      dispatch(
        usersActions.addUser({
          id: users.length + 1,
          name: name[0].toUpperCase() + name.slice(1),
          city: city[0].toUpperCase(0) + city.slice(1),
          age,
          gender,
          childAmount,
          member,
          type: helpingType,
          house,
          houseRelation,
          wanted: animal,
          other,
          avatar: colors[Math.floor(Math.random() * (colors.length - 1))],
        })
      );
    }
    clearFields();
  };

  function checkEmpty() {
    if (
      name &&
      city &&
      age &&
      gender &&
      animal &&
      house &&
      houseRelation &&
      member &&
      helpingType
    ) {
      return false;
    }
    return true;
  }
  function changeAnimal(value) {
    setAnimal(value);
  }

  function changeHouse(value) {
    setHouse(value);
  }
  function changeName(e) {
    setName(e.target.value);
  }
  function changeAge(e) {
    setAge(e.target.value);
  }
  function changeCity(e) {
    setCity(e.target.value);
  }
  function changeGender(value) {
    setGender(value);
  }
  function changeChildAmount(value) {
    setChildAmount(value);
  }
  function changeMember(value) {
    setMember(value);
  }
  function changeHelpingType(value) {
    setHelpingType(value);
  }
  function changeOther(e) {
    setOther(e.target.value);
  }
  function changeHouseRelation(value) {
    setHouseRelation(value);
  }
  function clearFields() {
    setName("");
    setAge("");
    setCity("");
    setGender("");
    setChildAmount(0);
    setMember(1);
    setHelpingType("");
    setAnimal("");
    setHouse("");
    setOther("");
    setHouseRelation("");
  }

  return (
    <Modal
      open={isFormOpen}
      title="Анкета"
      onOk={handleOkForm}
      onCancel={handleCancel}
      width="650px"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Отмена
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleOkForm}
          htmlType="submit"
          disabled={isEmpty}
        >
          Отправить
        </Button>,
      ]}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[
            {
              required: true,
              message: "Введите ваше имя",
            },
          ]}
        >
          <Input defaultValue={name} onChange={changeName} />
        </Form.Item>

        <Form.Item
          label="Возраст"
          name="age"
          rules={[
            {
              required: true,
              message: "Введите ваш возраст",
            },
          ]}
        >
          <Input onChange={changeAge} defaultValue={age} />
        </Form.Item>
        <Form.Item
          label="Город"
          name="city"
          rules={[
            {
              required: true,
              message: "Введите ваш город",
            },
          ]}
        >
          <Input onChange={changeCity} defaultValue={city} />
        </Form.Item>
        <Form.Item
          label="Пол"
          name="gender"
          rules={[
            {
              required: true,
              message: "Выберите пол",
            },
          ]}
        >
          <Select defaultValue={gender} onChange={changeGender}>
            <Select.Option value="Женский">Женский</Select.Option>
            <Select.Option value="Мужской">Мужской</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="children"
          label="Количество детей"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber
            min={0}
            max={10}
            defaultValue={childAmount}
            onChange={changeChildAmount}
          />
        </Form.Item>
        <Form.Item
          name="member"
          label="Количество членов семьи"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber
            min={1}
            max={20}
            defaultValue={member}
            onChange={changeMember}
          />
        </Form.Item>
        <Form.Item
          name="helping"
          label="Тип помощи"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select defaultValue={helpingType} onChange={changeHelpingType}>
            <Select.Option value="Передержка">
              Взять на передержку
            </Select.Option>
            <Select.Option value="Забрать">
              Взять на постоянное проживание
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Тип жилья"
          name="house"
          rules={[
            {
              required: true,
              message: "Выберите тип жилья",
            },
          ]}
        >
          <Select defaultValue={house} onChange={changeHouse}>
            <Select.Option value="Частный дом">Частный дом</Select.Option>
            <Select.Option value="Квартира">Квартира</Select.Option>
          </Select>
        </Form.Item>
        {house !== "" && (
          <Form.Item
            label="Уточните тип жилья"
            name="housingRelations"
            rules={[
              {
                required: true,
                message: "Выберите тип отношений",
              },
            ]}
          >
            <Select defaultValue={houseRelation} onChange={changeHouseRelation}>
              <Select.Option value="Собственность">Собственность</Select.Option>
              <Select.Option value="Съём">Съём</Select.Option>
            </Select>
          </Form.Item>
        )}
        <Form.Item
          name="animal"
          label="Желаемый питомец"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select defaultValue={animal} onChange={changeAnimal}>
            <Select.Option value="Любое">Любой</Select.Option>
            <Select.Option value="Кошка">Кошка</Select.Option>
            <Select.Option value="Собака">Собака</Select.Option>
            <Select.Option value="Другое">Другой</Select.Option>
          </Select>
        </Form.Item>

        {animal === "other" && (
          <Form.Item
            name="otherAnimal"
            label="Уточните животного"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={changeOther} />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
}

export default UserModal;
