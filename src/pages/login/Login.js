import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import LoginForm from "../../components/loginForm/LoginForm";
import "../../components/loginForm/login.css";


const Login = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <main className={lightMode ? "loginFormContainerLight" : "loginFormContainer"}>
      <h3>Login</h3>
      <LoginForm/>
    </main>
  );
};

export default Login;
