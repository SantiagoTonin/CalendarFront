import React, { useState } from "react";
import "./post.css";

function Post(props) {
  const { userDb, date } = props.data;
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [image, setImage] = useState();


  return (
    <div className="post-container">
      <div className="infoPost-container">
        <span className="user">
          {userDb.name} {userDb.lastName}
        </span>
        <span className="iconPost">x</span>
      </div>
      <div className="image-container">
        {image && (
          <img
            className="image"
            src=""
            alt="Imagen del post"
            onLoad={() => console.log("Imagen cargada")} // Puedes hacer algo cuando la imagen se carga
          />
        )}
      </div>
      <span className="title">titulo de la imagen</span>
      <div className="dataPost">
        <span className="iconPost">icono de me gusta</span>
        <span className="countComment">1</span>
      </div>
    </div>
  );
}

export default Post;

