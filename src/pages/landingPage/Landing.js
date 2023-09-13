import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landingMainContainer">
      <div>
        <h1 className="pageTitle pt-3">My Calendar</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
          aspernatur tenetur doloremque iste{" "}
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            aspernatur tenetur doloremque iste. consectetur adipisicing elit.
            Eos aspernatur tenetur doloremque iste. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Qui veniam illum eius neque fugit
            quisquam beatae corporis et doloribus, sapiente libero! Aliquam
            error hic dolores voluptas ipsam esse quae nihil!{" "}
          </p>
        </div>
        <div className="grid2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            aspernatur tenetur doloremque iste. consectetur adipisicing elit.
            Eos aspernatur tenetur doloremque iste. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Qui veniam illum eius neque fugit
            quisquam beatae corporis et doloribus, sapiente libero! Aliquam
            error hic dolores voluptas ipsam esse quae nihil!{" "}
          </p>
          <div className="adImage2"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
