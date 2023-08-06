import { Form, Button } from "react-bootstrap";
import "./register.css";
import "../../components/loginForm/login.css";

const Register = () => {
  return (
    <main className="registerFormContainer">
      <h3>Registro</h3>
      <Form>
        <Form.Group className="my-3" controlId="formGroupEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido" />
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingrese su fecha de nacimiento"
          />
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" placeholder="Ingrese su edad" />
          <Form.Label>Nacionalidad</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nacionalidad" />
        </Form.Group>
        <Form.Group className="my-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
          <Form.Label>Repetir contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese nuevamente su contraseña"
          />
        </Form.Group>
          <div className="formLoginBtnContainer">
            <Button className="formLoginBtn">Registrarse</Button>
          </div>
      </Form>
    </main>
  );
};

export default Register;
