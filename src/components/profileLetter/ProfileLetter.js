import { useState } from "react";
import { apiCreatePicture } from "../../api/axiosApi";
import "./ProfileLetter.css";

function ProfileLetter({ data }) {
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
        <label className="profileLabel">Nombre:</label>
        <span className="profileValue">{data?.name}</span>

        <label className="profileLabel">Apellido:</label>
        <span className="profileValue">{data?.lastName}</span>

        <label className="profileLabel">Edad:</label>
        <span className="profileValue">{data?.age}</span>

        <label className="profileLabel">Nacionalidad:</label>
        <span className="profileValue">{data?.nationality}</span>

        <label className="profileLabel">Fecha de Nacimiento:</label>
        <span className="profileValue">{data?.birthdate}</span>

        <label className="profileLabel">Email:</label>
        <span className="profileValue">{data?.email}</span>
      </div>
      <div className="errorPicture">
      <span>{pictureError}</span>
      </div>
    </div>
  );
}

export default ProfileLetter;
