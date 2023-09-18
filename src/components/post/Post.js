import React from "react";
import "./post.css";

function Calendar() {
  return (
    <div className="post-container">
      <div className="infoPost-container">
        <span className="user">prueba</span>
        <span className="iconPost">x</span>
      </div>
      <div className="image-container">
        <image className="image"></image>
      </div>
        <span className="title">titulo de la imagen</span>
      <div className="dataPost">
        <span className="iconPost">icono de me gusta</span>
        <span className="countComment">1</span>
      </div>
    </div>
  );
}

export default Calendar;
