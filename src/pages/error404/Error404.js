import { Button } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import errorImage from "../../assets/images/error404/errorImage2.png";
import "./error404.css";

const ErrorPage = () => {
  return (
    <main className="error404Container">
      <div className="glitchContainer">
        <p className="glitch">
          <span aria-hidden="true">Oh no!!</span>
          Oh no!!
          <span aria-hidden="true">Oh no!!</span>
        </p>
        <img src={errorImage} alt="error Imagen" className="imageContainer" />
      </div>
      <div>
        <div>
          <p>
            <span>Error 404</span>
            <span>Ruta Inexistente.</span>
          </p>
          <Link to="/">
            <Button className="allBtns">
              <IoMdArrowRoundBack /> Volver
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
