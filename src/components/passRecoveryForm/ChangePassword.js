import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./passRecovery.css";
import axiosInstance from "../../config/axiosInit";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { password: "", confirmPassword: "" }, // Agregamos el campo confirmPassword
  });

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
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      await axiosInstance.post("/user/recoveryPassword/:token", data);
      setSuccessMessage("Contraseña cambiada exitosamente.");
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
        <label>Ingresa tu nueva contraseña</label>
        <input
          className={`mt-3 mb-2 ${
            focusedField === "password" ? "focused" : ""
          }`}
          type="password"
          placeholder="Ingresar nueva contraseña"
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
          onFocus={() => handleFocus("email")}
        />
        <p>{errors.password?.message}</p>

        <label>Repetir Contraseña</label>
        <input
          className={`mt-3 mb-2 ${
            focusedField === "confirmPassword" ? "focused" : ""
          }`}
          type="password"
          placeholder="Repetir nueva contraseña"
          {...register("confirmPassword", {
            required: "Este campo es obligatorio.",
            validate: (value) =>
              value === watch("password") || "Las contraseñas no coinciden.",
          })}
          onBlur={handleBlur}
          onFocus={() => handleFocus("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        {successMessage && <p className="successMessage">{successMessage}</p>}
        <div className="passRedirectContainer">
          <a href="./">Volver atrás</a>
        </div>
        <div className="formRecoveryBtnContainer">
          <Button className="formRecoveryBtn" type="submit">
            Cambiar contraseña
          </Button>
        </div>
      </form>
    </>
  );
};

export default ChangePasswordForm;
