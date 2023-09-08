import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BsMeta, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  const { lightMode } = useContext(ThemeContext);
  return (
    <main className={lightMode ? "footerContainerLight" : "footerContainer"}>
      <section className="footerContent">
        <span>My calendar</span>
        <article className="footerListItems d-flex flex-row">
          <ul>
            <li>Términos y condiciones</li>
            <li>Políticas de privacidad</li>
            <li>Protección de datos</li>
            <li>Uso de cookies</li>
          </ul>
          <ul>
            <li>Acerca de nosotros</li>
            <li>Contactanos</li>
            <li>Ubicación</li>
            <li>Trabaja con nosotros</li>
          </ul>
          <ul>
            <li><BsLinkedin/> LinkedIn</li>
            <li><BsInstagram/> Instagram</li>
            <li><BsTwitter/> Twitter</li>
            <li><BsMeta/> Facebook</li>
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
