import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { BsMeta, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  const { lightMode } = useContext(ThemeContext);
  return (
    <main className={lightMode ? "footerContainerLight" : "footerContainer"}>
      <section className="footerContent">
        <span>My calendar</span>
        <article className="footerListItems d-flex flex-row">
          <ul>
            <li>
              <Link to="/underConstruction">Términos y condiciones</Link>
            </li>
            <li>
              <Link to="/underConstruction">Políticas de privacidad</Link>
            </li>
            <li>
              <Link to="/underConstruction">Protección de datos</Link>
            </li>
            <li>
              <Link to="/underConstruction">Uso de cookies</Link>
            </li>
          </ul>
          <ul>
            <li>Acerca de nosotros</li>
            <li>
              <Link to="/underConstruction">Contactanos</Link>
            </li>
            <li>
              <Link to="/underConstruction">Ubicación</Link>
            </li>
            <li>
              <Link to="/underConstruction">Trabaja con nosotros</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="https://www.linkedin.com/">
                <BsLinkedin /> LinkedIn
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/">
                <BsInstagram /> Instagram
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/?lang=es">
                <FaXTwitter /> Twitter
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/?locale=es_LA">
                <BsMeta /> Facebook
              </Link>
            </li>
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
