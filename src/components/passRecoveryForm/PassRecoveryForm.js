import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./passRecovery.css";
import axiosInstance from "../../config/axiosInit";

const PassRecoveryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "" } });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const errorTimer = setTimeout(() => {
      setErrorMessage("");
    }, 4000);

    const successTimer = setTimeout(() => {
      setSuccessMessage("");
    }, 4000);

    return () => {
      clearTimeout(errorTimer);
      clearTimeout(successTimer);
    };
  }, [errorMessage, successMessage]);

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post("/user/recoveryPassword", data);
      setSuccessMessage(
        "Se ha enviado un correo con las instrucciones de recuperación."
      );
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
      <form onSubmit={handleSubmit(onSubmit)} className="passRecoveryForm">
        <label>
          He olvidado mi contraseña, por favor envíe la contraseña a mi correo
          electrónico.
        </label>
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
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        {successMessage && <p className="successMessage">{successMessage}</p>}
        <div className="passRedirectContainer">
          <a href="./">Volver atrás</a>
        </div>
        <div className="formRecoveryBtnContainer">
          <Button className="formRecoveryBtn" type="submit">
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
};

export default PassRecoveryForm;
