import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import axiosInstance from "../../config/axiosInit";
import "../../styles/buttonStyles.css";
import "./profileForm.css";

const ProfileForm = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [showModal, setShowModal] = useState(false);
  const [user, setUserData] = useState(null);
  const { lightMode } = useContext(ThemeContext);

  const [editableData, setEditableData] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    age: "",
    email: "",
    nationality: "",
  });

  const handleOpenModal = () => {
    setShowModal(true);
    setEditableData({
      name: user?.name || "",
      lastName: user?.lastName || "",
      birthdate: user?.birthdate || "",
      age: user?.age || "",
      email: user?.email || "",
      nationality: user?.nationality || "",
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditableData({
      ...editableData,
      [name]: value,
    });
  };

  useEffect(() => {
    const tokenFromStorage = sessionStorage.getItem("token");
    if (tokenFromStorage) {
      axiosInstance
        .post(
          "/user/info",
          {},
          {
            headers: {
              Authorization: tokenFromStorage,
            },
          }
        )
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, []);

  const handleEditUserInModal = async () => {
    const tokenFromStorage = sessionStorage.getItem("token");
    if (tokenFromStorage) {
      await axiosInstance
        .put(`/user/${user.userId}`, editableData, {
          headers: {
            Authorization: tokenFromStorage,
          },
        })
        .then((response) => {
          console.log("Usuario actualizado:", response.data);
          handleCloseModal();
          tokenReplace(response.data.token);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error al editar usuario:", error);
        });
    }
  };

  const tokenReplace = (newToken) => {
    sessionStorage.clear();
    sessionStorage.setItem("token", newToken);
  };

  return (
    <main className="profileContainer">
      <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
        <div className={lightMode ? "gridContainerLight" : "gridContainer"}>
          <div className="gridItem">
            <label>Nombre</label>
            <input defaultValue={user?.name} readOnly />
          </div>
          <div className="gridItem">
            <label>Apellido</label>
            <input defaultValue={user?.lastName} readOnly />
          </div>
          <div className="gridItem">
            <label>Fecha de nacimiento</label>
            <input defaultValue={user?.birthdate} readOnly />
          </div>
          <div className="gridItem">
            <label>Edad</label>
            <input defaultValue={user?.age} readOnly />
          </div>
          <div className="gridItem">
            <label>Email</label>
            <input defaultValue={user?.email} readOnly />
          </div>
          <div className="gridItem">
            <label>Nacionalidad</label>
            <input defaultValue={user?.nationality} readOnly />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div>
          <Button
            className={lightMode ? "allBtnsLight" : "allBtns"}
            type="submit"
            onClick={handleOpenModal}
          >
            Editar
          </Button>
        </div>
      </form>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="modal-xl"
        centered
        className="profileModal"
      >
        <Modal.Header closeButton className="profileModalHeader">
          <Modal.Title>Editar información de perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalGridContainer">
            <div className="modalGridItem">
              <label>Nombre</label>
              <input
                name="name"
                value={editableData.name}
                onChange={handleFieldChange}
              />
            </div>
            <div className="modalGridItem">
              <label>Apellido</label>
              <input
                name="lastName"
                value={editableData.lastName}
                onChange={handleFieldChange}
              />
            </div>
            <div className="modalGridItem">
              <label>Fecha de nacimiento</label>
              <input
                name="birthdate"
                value={editableData.birthdate}
                onChange={handleFieldChange}
              />
            </div>
            <div className="modalGridItem">
              <label>Edad</label>
              <input
                name="age"
                value={editableData.age}
                onChange={handleFieldChange}
              />
            </div>
            <div className="modalGridItem">
              <label>Email</label>
              <input
                name="email"
                value={editableData.email}
                onChange={handleFieldChange}
              />
            </div>
            <div className="modalGridItem">
              <label>Nacionalidad</label>
              <input
                name="nationality"
                value={editableData.nationality}
                onChange={handleFieldChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button id="profileModalCloseBtn" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button id="profileModalConfirmBtn" onClick={handleEditUserInModal}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default ProfileForm;
