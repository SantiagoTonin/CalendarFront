import { Form, Button, Alert } from "react-bootstrap";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";
import { UserContext } from '../../context/UserContext';
import { LoginInitialValues } from "../../constants/constants";
import { validationsLogin } from "../../helpers/LoginValidations";
import "../../pages/login/login.css";

const LoginForm = () => {
  const { login, authenticated } = useContext(UserContext);
  const navigate = useNavigate();
  const {values, handleChange, handleSubmit, errors} = useForm(
    LoginInitialValues,
    login,
    validationsLogin
  );

  useEffect (() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="my-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
          onChange={handleChange}
          name="email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          onChange={handleChange}
          name="password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <div className="redirectContainer">
          <a href="./error404">¿Olvidaste tu contraseña?</a>
          <a href="./registerPage">
            ¿No tienes cuenta? Crea una<span>aquí</span>
          </a>
        </div>
        <div className="formLoginBtnContainer">
          <Button className="formLoginBtn" type="submit"> {" "} Ingresar</Button>
        </div>
        {Object.keys(errors).length != 0 ? Object.values(errors).map((errors) => (<Alert variant="danger">{errors}</Alert>)) : null}
      </Form.Group>
    </Form>
  );
};

export default LoginForm;
