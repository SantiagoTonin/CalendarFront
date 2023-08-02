import { Modal, Button } from "react-bootstrap";
import "./usersModal.css";

const DeleteUsersModal = ({
  deleteModalShow,
  setDModalShow,
  handleDelete,
  confirmDelete,
  deleteUserId,
}) => {
  return (
    <Modal
      id="deletModal"
      show={deleteModalShow}
      onHide={() => setDModalShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Borrar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="d-flex justify-content-center mb-4">
          ¿Está seguro que desea borrar el usuario?
        </h5>
        <div className="d-flex justify-content-evenly">
          <Button
            id="confirmDeleteUserBtn"
            onClick={() => {
              confirmDelete(deleteUserId);
            }}
          >
            Eliminar
          </Button>
          <Button id="regretDeleteUserBtn" onClick={() => setDModalShow(false)}>
            Cancelar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteUsersModal;
