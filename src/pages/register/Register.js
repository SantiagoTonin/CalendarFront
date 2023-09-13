import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "../../components/loginForm/login.css";
import RegisterForm from "../../components/registerForm/RegisterForm";

const Register = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <main className={lightMode ? "registerFormContainerLight" : "registerFormContainer"}>
      <h3>Registro</h3>
      <RegisterForm/>
    </main>
  );
};

export default Register;
