import React from 'react';
import { Modal } from 'react-bootstrap';
import EditForm from '../form/EditForm';
import './modals.css';

const createModal = ({ createModalShow, setCreateModalShow, handleSubmit }) => {
  return (
    <Modal show={createModalShow} onHide={() => setCreateModalShow(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Crear producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditForm handleSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  )
}

export default createModal
