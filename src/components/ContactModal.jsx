import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
function ContactModal({ setIsContact, isContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  let isEmpty = checkEmpty();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleCancel = () => {
    setIsContact(false);
  };
  const handleOkForm = (e) => {
    if (isEmpty) {
      console.log("1");
    } else {
      setIsContact(false);
    }
    clearFields();
  };
  function checkEmpty() {
    if (name && isPhoneValid) {
      return false;
    }
    return true;
  }
  function changePhone(e) {
    formatPhone(e.target.value);
  }

  function changeName(e) {
    setName(e.target.value);
  }

  function clearFields() {
    setName("");
  }

  function formatPhone(num) {
    let phoneNumber = num;
    if (phoneNumber[0] == "+") {
      phoneNumber = phoneNumber.replace(/\D/g, "");
      phoneNumber = phoneNumber.slice(1, 11);
    } else {
      phoneNumber = phoneNumber.replace(/\D/g, "");
      phoneNumber = phoneNumber.slice(0);
    }
    if (phoneNumber.length > 0) {
      phoneNumber = "+7(" + phoneNumber;
    }
    if (phoneNumber.length > 6) {
      phoneNumber = [phoneNumber.slice(0, 6), ")", phoneNumber.slice(6)].join(
        ""
      );
    }
    if (phoneNumber.length > 7) {
      phoneNumber = [phoneNumber.slice(0, 7), " ", phoneNumber.slice(7)].join(
        ""
      );
    }
    if (phoneNumber.length > 11) {
      phoneNumber = [phoneNumber.slice(0, 11), "-", phoneNumber.slice(11)].join(
        ""
      );
    }
    if (phoneNumber.length > 14) {
      phoneNumber = [phoneNumber.slice(0, 14), "-", phoneNumber.slice(14)].join(
        ""
      );
    }
    setPhone(phoneNumber);
    if (phoneNumber.length === 17) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  }

  console.log("phone", phone);

  return (
    <Modal
      open={isContact}
      title="Заполните контактные данные"
      onOk={handleOkForm}
      onCancel={handleCancel}
      width="650px"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Отменить
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
        <Form.Item label="Номер телефона" required>
          <Input defaultValue={phone} value={phone} onChange={changePhone} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ContactModal;
