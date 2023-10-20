import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import alexiaTonin from "../../assets/images/aboutUs/alexiaTonin.jpg";
import santiagoTonin from "../../assets/images/aboutUs/santiagoTonin.jpg";
import "./aboutUs.css";

const AboutUs = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <main className={lightMode ? "aboutUsContainerLight" : "aboutUsContainer"}>
      <div className="santiagoContainer">
        <div>
          <img src={santiagoTonin} alt="Foto Santiago Tonin" />
        </div>
        <div>
          <h3 className="metalTitle">SANTIAGO TONIN ELIAS</h3>
          <p>
            Santiago Tonin Elias, Full Stack Developer. <br />
            Estudiante de ingenieria, apasionado de los gatos y amante de los
            videojuegos.
          </p>
        </div>
      </div>
      <div className="alexiaContainer">
        <div>
          <h3 className="metalTitle">ALEXIA TONIN ELIAS</h3>
          <p>
            Alexia Tonin Elias, Full Stack Developer. <br />
            Abogada, amante del café y jugadora de tenis en sus tiempos libres.
          </p>
        </div>
        <div>
          <img src={alexiaTonin} alt="Foto Alexia Tonin" />
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
