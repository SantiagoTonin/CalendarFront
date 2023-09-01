import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../styles/buttonStyles.css"
import "./register.css";
import axiosInstance from "../../config/axiosInit";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      lastname: "",
      birthdate: "",
      age: "",
      nationality: "",
    },
  });

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
      const response = await axiosInstance.post("/singup", data);
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
      <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
        <label>Nombre</label>
        <input
          className={`mt-3 mb-2 ${focusedField === "name" ? "focused" : ""}`}
          type="text"
          placeholder="Ingresar nombre/s"
          {...register("name", {
            required: "Este campo es obligatorio.",
            minLength: {
              value: 3,
              message: "El nombre debe contener como mínimo 3 caracteres",
            },
          })}
          onBlur={handleBlur}
          onFocus={() => handleFocus("name")}
        />
        <p>{errors.name?.message}</p>
        <label>Apellido</label>
        <input
          className={`mt-3 mb-2 ${
            focusedField === "lastname" ? "focused" : ""
          }`}
          type="text"
          placeholder="Ingresar apellido/s"
          {...register("lastname", {
            required: "Este campo es obligatorio.",
            minLength: {
              value: 3,
              message: "El apellido debe contener como mínimo 3 caracteres",
            },
          })}
          onBlur={handleBlur}
          onFocus={() => handleFocus("lastname")}
        />
        <p>{errors.lastname?.message}</p>
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
        <label>Fecha de nacimiento</label>
        <input
          className={`mt-3 mb-2 ${
            focusedField === "birthdate" ? "focused" : ""
          }`}
          type="number"
          placeholder="Ingresar edad"
          {...register("birthdate", {
            required: "Este campo es obligatorio.",
          })}
          onBlur={handleBlur}
          onFocus={() => handleFocus("birthdate")}
        />
        <p>{errors.birthdate?.message}</p>
        <label>Edad</label>
        <input
          className={`mt-3 mb-2 ${focusedField === "age" ? "focused" : ""}`}
          type="number"
          placeholder="Ingresar fecha de nacimiento"
          {...register("age", {
            required: "Este campo es obligatorio.",
          })}
          onBlur={handleBlur}
          onFocus={() => handleFocus("age")}
        />
        <p>{errors.age?.message}</p>
        <label>Nacionalidad</label>
        <input
          className={`mt-3 mb-2 ${
            focusedField === "nationality" ? "focused" : ""
          }`}
          type="text"
          placeholder="Ingresar nacionalidad"
          {...register("nationality", {
            required: "Este campo es obligatorio.",
          })}
          onBlur={handleBlur}
          onFocus={() => handleFocus("nationality")}
        />
        <p>{errors.nationality?.message}</p>
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
        <div className="registerRedirectContainer">
          <a href="./login">
            ¿Ya tienes cuenta?<span> Ingresa aqui</span>
          </a>
        </div>
        <div className="formLoginBtnContainer">
          <Button className="allBtns" type="submit">
            Registrarse
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
