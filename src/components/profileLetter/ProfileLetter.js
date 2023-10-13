import { useState, useContext } from "react";
import { apiCreatePicture } from "../../api/axiosApi";
import { ThemeContext } from "../../context/ThemeContext";
import "./ProfileLetter.css";

function ProfileLetter({ data }) {
  const { lightMode } = useContext(ThemeContext);
  const [pictureError, setPictureError] = useState();
  
  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("picture", file);
    formData.append("userId", data.userId);
    const resultPicture = await apiCreatePicture(
      formData,
      sessionStorage.getItem("token")
    );
    if (resultPicture.status === 200) {
      window.location.reload();
    }else{
      setPictureError(resultPicture.message)
    }
  };

  return (
    <div className="profileCard">
      <div className="profileHeader">
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
        />
        <img
          className="profileImage"
          src={data?.pictures[0]?.path || "default-image.jpg"}
          alt="Foto de perfil"
          onClick={handleImageClick}
        />
      </div>
      <div className="profileInfo">
        <label className={lightMode ? "profileLabelLight" : "profileLabel"}>Nombre:</label>
        <span className={lightMode ? "profileValueLight" : "profileValue"}>{data?.name}</span>

        <label className={lightMode ? "profileLabelLight" : "profileLabel"}>Apellido:</label>
        <span className={lightMode ? "profileValueLight" : "profileValue"}>{data?.lastName}</span>

        <label className={lightMode ? "profileLabelLight" : "profileLabel"}>Edad:</label>
        <span className={lightMode ? "profileValueLight" : "profileValue"}>{data?.age}</span>

        <label className={lightMode ? "profileLabelLight" : "profileLabel"}>Nacionalidad:</label>
        <span className={lightMode ? "profileValueLight" : "profileValue"}>{data?.nationality}</span>

        <label className={lightMode ? "profileLabelLight" : "profileLabel"}>Fecha de Nacimiento:</label>
        <span className={lightMode ? "profileValueLight" : "profileValue"}>{data?.birthdate}</span>

        <label className={lightMode ? "profileLabelLight" : "profileLabel"}>Email:</label>
        <span className={lightMode ? "profileValueLight" : "profileValue"}>{data?.email}</span>
      </div>
      <div className="errorPicture">
      <span>{pictureError}</span>
      </div>
    </div>
  );
}

export default ProfileLetter;
