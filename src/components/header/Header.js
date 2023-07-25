import React, { useContext } from "react";
import ThemeButton from "../themeButton/ThemeButton";
import { ThemeContext } from "../../context/ThemeContext";
import "./header.css";

const Header = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <main className={lightMode ? "headerContainerLight" : "headerContainer"}>
      <div className="logoContainer">
        <span>My Calendar</span>
      </div>
      <div className="wellcomeUserContainer">
        <h5>Bienvenido ---- !</h5>
        <ThemeButton />
      </div>
    </main>
  );
};

export default Header;
