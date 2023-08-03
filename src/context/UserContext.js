import { createContext, useState } from "react";
import axiosInstance from "../config/axiosInit";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const login = async (values) => {
    try {
      const response = await axiosInstance.post("/singin", values);
      const data = response.data;
      setUser(data.user);
      setToken(data.token);
      setAuthenticated(true);
      localStorage.setItem("token", data.token);
    } catch (error) {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      setUser(null);
      setToken(null);
      setAuthenticated(false);
      alert(`Error en la conexión. Motivo:` + error.response.data.messages);
    }
  };
  const getAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstance.defaults.headers.common["authorization"] = token;
    } else {
      delete axiosInstance.defaults.headers.common["authorization"];
    }
    try {
      const response = await axiosInstance.get("/user/checkEmail/:token");
      const data = response.data;
      setUser(data.user);
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false);
      setUser(null);
      setToken(null);
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      alert("Error. Motivo: Falla en la autenticacion");
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
    setToken(null);
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        authenticated,
        token,
        getAuth,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
