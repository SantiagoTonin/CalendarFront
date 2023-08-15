import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import axiosInstance from "../../config/axiosInit";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/singin", data);
      sessionStorage.setItem("token", response?.data?.token);
      window.location.replace("/home");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Hubo un error al procesar la solicitud.");
      }
    }
  };

  const handleBlur = (event) => {
    setFocusedField(null);
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
        <label>Email</label>
        <input
          className={`mt-3 mb-2 ${focusedField === "email" ? "focused" : ""}`}
          type="text"
          placeholder="Ingresar email"
          {...register("email", {
            required: "Este campo es obligatorio.",
            minLength: {
              value: 8,
              message: "El email debe tener al menos 8 caracteres",
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              message: "Formato de email inválido",
            },
          })}
          onBlur={handleBlur}
          onFocus={() => handleFocus("email")}
        />
        <p>{errors.email?.message}</p>
        <label>Contraseña</label>
        <input
          className={`mt-3 mb-2 ${
            focusedField === "password" ? "focused" : ""
          }`}
          type="password"
          placeholder="Ingresar contraseña"
          {...register("password", {
            required: "Este campo es obligatorio.",
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
              pattern: "/.{6,16}$/",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "La contraseña tiene que tener al menos 8 caracteres, una letra y un numero",
            },
          })}
          onBlur={handleBlur}
          onFocus={() => handleFocus("password")}
        />
        <p>{errors.password?.message}</p>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <div className="redirectContainer">
          <a href="./error404">¿Olvidaste tu contraseña?</a>
          <a href="./registerPage">
            ¿No tienes cuenta? Crea una<span>aquí</span>
          </a>
        </div>
        <div className="formLoginBtnContainer">
          <Button className="formLoginBtn" type="submit">
            Registrarse
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
