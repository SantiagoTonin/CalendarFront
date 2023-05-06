import { FloatingLabel, Form, Button } from "react-bootstrap";
import Register from "../register/Register";
import { useForm } from "react-hook-form";
import "./login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    const resp = await fetch("URL", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await resp.json();

    try {
      if (json.user.role === "ADMIN") {
        localStorage.setItem("access-token", json.token);
        localStorage.setItem("role", json.user.role);
        window.location.href = "/admin";
      } else if (json.user.role === "USER") {
        localStorage.setItem("access-token", json.token);
        localStorage.setItem("role", json.user.role);
        localStorage.setItem("user", JSON.stringify(json.user));
        window.location.href = "/home";
      }
    } catch (error) {
      alert("El usuario o la contraseña que ingresaste no es correcto");
    }
  };

  return (
    <>
      <div className="loginpage container d-flex align-items-center">
        <div className="container mt-1 login-portada col d-flex justify-content-around align-items-center">
          <div className="login-portada-text w-100">
            <h4 className="mb-4 text-light">INICIÁ SESIÓN O REGISTRATE</h4>
            <form onSubmit={handleSubmit(handleLogin)}>
              <FloatingLabel
                controlId="floatingInput"
                label="Dirección de correo electrónico"
                className="mb-3 w-100"
              >
                <Form.Control
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  className="input-login-email w-100 rounded-0"
                  name="email"
                  required
                  minLength="2"
                  maxLength="30"
                  {...register("email", { require: true })}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Contraseña">
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                  minLength="8"
                  maxLength="30"
                  className="rounded-0"
                  {...register("password", { require: true })}
                />
              </FloatingLabel>
              <Button className="mt-2 me-2 btn-warning rounded-0" type="submit">
                Ingresar
              </Button>
            </form>
            <Register />
          </div>
          <div className="container col-6 d-flex justify-content-end">
            <img className="back m-2"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
