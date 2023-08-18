import React, { useContext, useState, useEffect } from "react";
import ThemeButton from "../themeButton/ThemeButton";
import { ThemeContext } from "../../context/ThemeContext";
import "./header.css";

const Header = () => {
  const { lightMode } = useContext(ThemeContext);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const tokenFromStorage = sessionStorage.getItem("token");
    setHasToken(tokenFromStorage ? true : false);
  }, []);

  return (
    <main className={lightMode ? "headerContainerLight" : "headerContainer"}>
      <div className="logoContainer">
        <span>My Calendar</span>
      </div>
      {hasToken && (
        <div className="wellcomeUserContainer">
          <h5>Bienvenido/a ---- !</h5>
          <ThemeButton />
        </div>
      )}
    </main>
  );
};

export default Header;
