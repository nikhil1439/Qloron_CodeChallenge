import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useSelector } from "react-redux";

export  const UserModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const { entities } = useSelector((state) => state.users);

  var data = entities.filter((user)=> user.id=== props.id)


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Id: {data.id}</p>
        <p>Name: {data.name}</p>s
        <p>Some contents...</p>
      </Modal>
    </>
  );
};