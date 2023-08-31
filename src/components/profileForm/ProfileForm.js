import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../config/axiosInit";
import "./profileForm.css";

const ProfileForm = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [user, setUserData] = useState(null);

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
          const userData = response.data;
          setUserData(userData);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, []);

  return (
    <main className="profileFormContainer">
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
            <input  defaultValue={user?.age} readOnly />
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
        <input type="submit" />
      </form>
    </main>
  );
};

export default ProfileForm;
