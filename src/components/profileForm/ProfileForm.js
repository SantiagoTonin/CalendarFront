import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
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

  const [user, setUserData] = useState(null);
  const { lightMode } = useContext(ThemeContext);

  useEffect(() => {
    const tokenFromStorage = sessionStorage.getItem("token");
    if (tokenFromStorage) {
      axiosInstance.post("/user/info",{},
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

  return (
    <main className="profileContainer">
      <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
        <div className="grid-container">
          <div className="grid-item">
            <label>Nombre</label>
            <input defaultValue={user?.name} readOnly />
          </div>
          <div className="grid-item">
            <label>Apellido</label>
            <input defaultValue={user?.lastName} readOnly />
          </div>
          <div className="grid-item">
            <label>Fecha de nacimiento</label>
            <input defaultValue={user?.birthdate} readOnly />
          </div>
          <div className="grid-item">
            <label>Edad</label>
            <input defaultValue={user?.age} readOnly />
          </div>
          <div className="grid-item">
            <label>Email</label>
            <input defaultValue={user?.email} readOnly />
          </div>
          <div className="grid-item">
            <label>Nacionalidad</label>
            <input defaultValue={user?.nationality} readOnly />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div>
          <Button
            className={lightMode ? "allBtnsLight" : "allBtns"}
            type="submit"
          >
            Editar
          </Button>
        </div>
      </form>
    </main>
  );
};

export default ProfileForm;
