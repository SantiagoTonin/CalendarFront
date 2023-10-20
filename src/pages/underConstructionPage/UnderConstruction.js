import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "react-bootstrap";
import underConstruction from "../../assets/images/underConstruction/underConstructionLogo2.png";
import "./underConstruction.css";

const UnderConstruction = () => {
  const { lightMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <main className={lightMode ? "underConstructionContainerLight" : "underConstructionContainer"}>
      <div className="underConstruction">
        <h2>Página en Construcción</h2>
        <h4>Disculpe las molestias</h4>
        <img src={underConstruction} alt="Página en construcción" />
        <div>
          <div className="progressBar stripes">
            <span className="progressBarInner"></span>
          </div>
          <div className="backToLandingBtn">
            <Button className={lightMode ? "allBtnsLight" : "allBtns"} onClick={handleGoBack}>Volver</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UnderConstruction;
