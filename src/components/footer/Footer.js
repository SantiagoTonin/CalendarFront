import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./footer.css";

const Footer = () => {
  const { lightMode } = useContext(ThemeContext);
  return (
    <main className={lightMode ? "footerContainerLight" : "footerContainer"}>
      <section className="footerContent">
        <span>My calendar</span>
        <article className="footerListItems d-flex flex-row">
          <ul>
            <li>Terminos y condiciones</li>
            <li>Politicas de privacidad</li>
            <li>Protección de datos</li>
            <li>Uso de cookies</li>
          </ul>
          <ul>
            <li>Acerca de nosotros</li>
            <li>Contactanos</li>
            <li>Ubicacion</li>
            <li>Trabaja con nosotros</li>
          </ul>
          <ul>
            <li>Nuestras redes sociales</li>
            <li>Intagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </article>
      </section>
      <section className="rightsContainer">
        <span>© 2023 My Calendar — All rights reserved</span>
      </section>
    </main>
  );
};

export default Footer;
