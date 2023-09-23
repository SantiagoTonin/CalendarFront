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
    }

    if (resultPicture.response.status === 400) {
      setPictureError(resultPicture.response.data.error);
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
        />
        <img
          className="profile-image"
          src={data?.pictures[0]?.path || "default-image.jpg"}
          alt="Foto de perfil"
          onClick={handleImageClick}
        />
      </div>
      <div className="profile-info">
        <label className="profile-label">Nombre:</label>
        <span className="profile-value">{data?.name}</span>

        <label className="profile-label">Apellido:</label>
        <span className="profile-value">{data?.lastName}</span>

        <label className="profile-label">Edad:</label>
        <span className="profile-value">{data?.age}</span>

        <label className="profile-label">Nacionalidad:</label>
        <span className="profile-value">{data?.nationality}</span>

        <label className="profile-label">Fecha de Nacimiento:</label>
        <span className="profile-value">{data?.birthdate}</span>

        <label className="profile-label">Email:</label>
        <span className="profile-value">{data?.email}</span>
      </div>
      <div className="errorPicture">
        <span>{pictureError}</span>
      </div>
    </div>
  );
}

export default ProfileLetter;
