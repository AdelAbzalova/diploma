import { useDispatch } from "react-redux";
import { petsActions } from "../../store/petsSlice";
import ModalComponent from "./ModalComponent";
const LogOut = ({ isModalOpen, setIsModalOpen, handleCancel }) => {
  const dispatch = useDispatch();
  const handleOkLogOut = () => {
    setIsModalOpen(false);
    dispatch(petsActions.logOut());
  };
  return (
    <>
      <ModalComponent
        isModalOpen={isModalOpen}
        handleOk={handleOkLogOut}
        handleCancel={handleCancel}
        title="Вы уверены, что хотите выйти?"
        okText="Выйти"
        okType="danger"
      ><></></ModalComponent>
    </>
  );
};

export default LogOut;
