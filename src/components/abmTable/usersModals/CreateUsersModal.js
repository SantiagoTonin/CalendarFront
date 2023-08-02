import { Button, Modal } from "react-bootstrap";
import "./usersModal.css";

const CreateUsersModal = ({ createModalShow, setCreateModalShow, handleSubmit }) => {
  return (
    <Modal show={createModalShow} onHide={() => setCreateModalShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Usuario</Modal.Title>
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
                required
              />
            </div>
            <div>
              <b>Apellidos:</b>
              <input
                placeholder="Apellidos"
                type="text"
                className="inputArea"
                minLength={3}
                maxLength={30}
                required
              />
            </div>
            <div>
              <b>Email:</b>
              <input
                placeholder="Email"
                type="email"
                className="inputArea"
                required
              />
            </div>
            <div>
              <b>Contraseña:</b>
              <input
                placeholder="Contraseña"
                type="password"
                className="inputArea"
                required
              />
            </div>
            <div>
              <b>Fecha de nacimiento:</b>
              <input
                type="date"
                className="inputArea"
                minLength={10}
                maxLength={11}
                required
              />
            </div>
            <div>
              <b>Edad:</b>
              <input
                placeholder="Edad"
                type="number"
                className="inputArea"
                minLength={1}
                maxLength={2}
                required
              />
            </div>
            <div>
              <b>Nacionalidad:</b>
              <input
                placeholder="Nacionalidad"
                type="text"
                className="inputArea"
                minLength={3}
                maxLength={30}
                required
              />
            </div>
            <div>
              <b>Rol:</b>
              <input
                placeholder="Rol"
                type="text"
                className="inputArea"
                minLength={3}
                maxLength={30}
                required
              />
            </div>
            <div className="modalBtnContainer">
              <Button id="modalButton" type="submit" onSubmit={handleSubmit}>
                Guardar
                {console.log("hola")}
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateUsersModal;
