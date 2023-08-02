import { Form, Button } from "react-bootstrap";
import "./login.css";

const Login = () => {

  return (
    <main className="loginFormContainer">
      <h3>Login</h3>
      <Form>
        <Form.Group className="my-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <div className="redirectContainer">
            <a href="./error404">¿Olvidaste tu contraseña?</a>
            <a href="./registerPage">
              ¿No tienes cuenta? Crea una<span>aquí</span>
            </a>
          </div>
          <div className="formLoginBtnContainer">
            <Button className="formLoginBtn">Ingresar</Button>
          </div>
        </Form.Group>
      </Form>
    </main>
  );
};

export default Login;
