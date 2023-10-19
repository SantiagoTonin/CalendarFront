import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landingMainContainer">
      <div>
        <h1 className="pageTitle pt-3">Khronora</h1>
        <h4>
          ¡Transforma tu forma de organizar, capturar y compartir! Registrate en
          Khronora y lleva tu vida al siguiente nivel.
        </h4>
      </div>
      <div>
        <div className="loginLanding"> </div>
        <div className="loginBtnContainer">
          <Link to={"/register"}>
            <Button className="allBtns">Registrate gratis aqui!</Button>
          </Link>
          <span>¿Ya tienes cuenta? Ingresa aquí:</span>
          <Link to={"/login"}>
            <Button className="allBtns">Ingresar</Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="grid1">
          <div className="adImage1"></div>
          <div>
            <p>
              📆 Organiza Tu Vida: Con una interfaz intuitiva y similar a Google
              Calendar, Khronora te permite planificar tu día, semana y mes de
              manera eficiente. Nunca pierdas una cita importante ni olvides un
              cumpleaños.
            </p>
            <p>
              📸 Captura y Almacena Momentos: ¿Tomaste una foto especial o
              escribiste una nota importante? Guárdala en Khronora para revivir
              esos momentos una y otra vez.
            </p>
          </div>
        </div>
        <div className="grid2">
          <div>
            <p>
              🌐 Comparte con Amigos: Comparte tus eventos y recuerdos con tus
              amigos y familiares en tiempo real. Haz que todos sean parte de tu
              vida y celebra juntos.
            </p>
            <p>
              🔒 Privacidad y Control: Tú decides quién puede ver tus eventos y
              recuerdos. Khronora te brinda control total sobre
              tu perfil y contenido.
            </p>
          </div>
          <div className="adImage2"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
