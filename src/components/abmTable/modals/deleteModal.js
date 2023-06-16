import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './modals.css';

const deleteModal = ({ deleteModalShow, setDModalShow, handleDelete, confirmDelete, deleteProductId }) => {

  return (
    <Modal id="deletModal" show={deleteModalShow} onHide={() => setDModalShow(false)} >
      <Modal.Header closeButton>
        <Modal.Title>Borrar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className='d-flex justify-content-center mb-4'>¿Seguro desea borrar el producto?</h5>
        <div className='d-flex justify-content-evenly'>
          <Button
            id='confirmBtnModal'
            onClick={() => {
              confirmDelete(deleteProductId);
            }}>
            Eliminar
          </Button>
          <Button
            id='regretBtnModal'
            onClick={() => setDModalShow(false)}>
            Cancelar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default deleteModal
