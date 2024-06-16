import {  useState } from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import ModalComponent from "./ModalComponent";
import { petsActions } from "../../store/petsSlice";


const LogIn= ({ isModalOpen, handleCancel, setIsModalOpen }) => {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const dispatch = useDispatch();
  const handleOkLogIn = () => {
      if(password!=='' && login!==''){
      dispatch(petsActions.logIn());
      setPassword("");
      setLogin("");
      setIsModalOpen(false);
    }
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeLogin = (e) => {
    setLogin(e.target.value);
  };
  return (
    <>
      <ModalComponent
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOkLogIn}
        title="Авторизация"
        okText="Войти"
        okType="primary"
      >
        <Input
          value={login}
          onChange={changeLogin}
          placeholder="Логин или email"
          style={{ margin: "20px 0" }}
        />
        <Input.Password
          value={password}
          onChange={changePassword}
          placeholder="Пароль"
          style={{ marginBottom: 20 }}
        />
      </ModalComponent>
    </>
  );
};
export default LogIn;
