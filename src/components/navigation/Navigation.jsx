import React, { useState } from "react";
import {
  UserOutlined,
  HomeOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import "./styles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogOut from "../modal/LogOut";
import LogIn from "../modal/LogIn";
import { petsActions } from "../../store/petsSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const items = [
    {
      label: (
        <Link to="/" rel="noopener noreferrer">
          Главная
        </Link>
      ),
      key: "main",
      icon: <HomeOutlined />,
      className: "menu-items",
    },
    {
      label: (
        <Link to="/users" rel="noopener noreferrer">
          Пользователи
        </Link>
      ),
      key: "users",
      icon: <UserOutlined />,
      className: "menu-items",
    },

    {
      label: (
        <Link
          to="/pets"
          rel="noopener noreferrer"
          onClick={() => dispatch(petsActions.clearFilters())}
        >
          Животные
        </Link>
      ),
      key: "pets",
      icon: <HeartOutlined />,
      className: "menu-items",
    },
    {
      label: (
        <Link
          to="/care"
          rel="noopener noreferrer"
          onClick={() => dispatch(petsActions.clearFilters())}
        >
          Уход за животными
        </Link>
      ),
      key: "care",
      icon: <MedicineBoxOutlined />,
      className: "menu-items",
    },
  ];
  const navCurrent = useSelector((state) => state.pets.navCurrent);
  const isAuthorized = useSelector((state) => state.pets.isAuthorized);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const text = isAuthorized ? "Выйти" : "Войти";
  const onClick = (e) => {
    dispatch(petsActions.changeNav(e.key));
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Menu
          onClick={onClick}
          selectedKeys={[navCurrent]}
          mode="horizontal"
          items={items}
          className="menu-header"
        />

        <Button
          shape="round"
          onClick={() => setIsModalOpen(true)}
          style={{
            position: "absolute",
            right: 150,
            top: 40,
            width: 150,
            fontSize: 16,
          }}
        >
          {text}
        </Button>
      </div>

      {isAuthorized ? (
        <LogOut
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleCancel={handleCancel}
        />
      ) : (
        <LogIn
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};
export default Navigation;
