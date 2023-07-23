import { Button, Modal } from "react-bootstrap"
import "./usersModal.css";


const EditUsersModal = () => {
  return (
    <Modal className="modal show">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="formContainer">
          <form>
            <div>
              <b>Nombres:</b>
              <input
                placeholder="Nombres"
                type="text"
                className="inputArea"
                minLength={3}
                maxLength={30}
              />
            </div>
            <div>
              <b>Apellido:</b>
              <input
                placeholder="Requerido"
                type="text"
                className="inputArea"
                minLength={3}
                maxLength={30}
              />
            </div>
            <div>
              <b>Email:</b>
              <input
                placeholder="Email"
                type="email"
                className="inputArea"
              />
            </div>
            <div>
              <b>Contraseña:</b>
              <input
                placeholder="Contraseña"
                type="password"
                className="inputArea"
              />
            </div>
            <div>
              <b>Fecha de nacimiento:</b>
              <input
                type="date"
                className="inputArea"
                minLength={10}
                maxLength={11}
              />
            </div>
            <div>
              <b>Edad:</b>
              <input
                type="number"
                className="inputArea"
                minLength={1}
                maxLength={2}
              />
            </div>
            <div>
              <b>Nacionalidad:</b>
              <input
                type="text"
                className="inputArea"
                minLength={3}
                maxLength={30}
              />
            </div>
            <div>
              <b>Rol:</b>
              <input
                type="text"
                className="inputArea"
                minLength={3}
                maxLength={30}
              />
            </div>
            <div className="modalBtnContainer">
              <button id="modalButton" type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditUsersModal;
