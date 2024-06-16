import { Button } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import LogIn from "./modal/LogIn";
import UserCard from "./UserCard";
import UserModal from "./UserModal";

function UsersPage() {
  const { users } = useSelector((state) => state.users);
  const isAuthorized = useSelector((state) => state.pets.isAuthorized);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  function handleClick() {
    if (!isAuthorized) {
      setIsLogOpen(true);
    } else {
      setIsFormOpen(true);
    }
  }
  function handleCancelLog() {
    setIsLogOpen(false);
  }
  return (
    <div style={{ marginTop: 100 }}>
      <Button onClick={handleClick}>Заполнить анкету</Button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      {isLogOpen && (
        <LogIn
          isModalOpen={isLogOpen}
          setIsModalOpen={setIsLogOpen}
          handleCancel={handleCancelLog}
        />
      )}
      {isFormOpen && <UserModal setIsFormOpen={setIsFormOpen} isFormOpen />}
    </div>
  );
}

export default UsersPage;
