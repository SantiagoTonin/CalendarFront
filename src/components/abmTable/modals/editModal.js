import React from 'react';
import { Modal } from 'react-bootstrap';
import Form from '../form/EditForm';
import './modals.css';

const editModal = (props) => {
  const {
    editModalShow,
    setEditModalShow,
    handleSubmit,
    isEditingForm,
    productToEdit,
    productToEditId,
    changeInputValue,
  } = props;

  return (
    <Modal id="editModal" show={editModalShow} onHide={() => setEditModalShow(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          handleSubmit={handleSubmit}
          isEditingForm={isEditingForm}
          productToEdit={productToEdit}
          productToEditId={productToEditId}
          changeInputValue={changeInputValue}
        />
      </Modal.Body>
    </Modal>
  )
}

export default editModal
