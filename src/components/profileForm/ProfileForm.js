import { useEffect, useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import { ImProfile } from "react-icons/im";
import { apiEditProfile } from "../../api/axiosApi";
import axiosInstance from "../../config/axiosInit";
import ProfileLetter from "../profileLetter/ProfileLetter";
import "../../styles/buttonStyles.css";
import "./profileForm.css";

const ProfileForm = () => {
  const { lightMode } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [user, setUserData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

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

    const result = await apiEditProfile(user.userId, editableData, tokenFromStorage);
    if (result.status === 200) {
      tokenReplace(result.data.token);
      window.location.reload();
      return;
    }


    if (result.response.status === 400) {
      setErrorMsg(result.response.data.error);
    }
  };

  const tokenReplace = (newToken) => {
    sessionStorage.clear();
    sessionStorage.setItem("token", newToken);
  };

  return (
    <main className="profileContainer">
      <ProfileLetter data={user}/>
        <div className="profileBtnContainer">
          <Button
            className={lightMode ? "allBtnsLight" : "allBtns"}
            type="submit"
            onClick={handleOpenModal}
          >
            Editar
          </Button>
        </div>
        
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="modal-xl"
        centered
        className="profileModal"
        >
        <Modal.Header closeButton className="profileModalHeader">
          <Modal.Title>
            <ImProfile /> Editar información de perfil
          </Modal.Title>
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
                type="number"
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
          <div className="profileErrorMsgContainer">
            <span className="profileErrorMsg">{errorMsg}</span>
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
