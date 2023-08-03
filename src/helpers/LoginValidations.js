export const validationsLogin = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "El campo email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email inválido";
  } else if (values.email.lenght > 30) {
    errors.email = "El email no debe tener más de 30 caracteres";
  }

  if (!values.password) {
    errors.email = "El campo contraseña es obligatorio";
  } else if (values.password.lenght < 8) {
    errors.email = "La contraseña debe tener más de 8 caracteres";
  } else if (values.password.lenght > 30) {
    errors.email = "La contraseña no debe tener más de 30 caracteres";
  }
  return errors;
};
