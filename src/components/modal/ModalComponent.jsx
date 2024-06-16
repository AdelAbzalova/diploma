import { Modal } from "antd";

const ModalComponent=(props)=>{
    return (
        <>
        <Modal centered 
        title={props.title}
        open={props.isModalOpen} 
        onOk={props.handleOk} 
        onCancel={props.handleCancel} 
        okText={props.okText}
        okType={props.okType}
        cancelText='Отмена'>
            {props.children}
            </Modal></>
    )
}

export default ModalComponent;