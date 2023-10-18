import React, { useContext, useState, useEffect } from "react";
import axiosInstance from "../../config/axiosInit";
import ThemeButton from "../themeButton/ThemeButton";
import { ThemeContext } from "../../context/ThemeContext";
import "./header.css";

const Header = () => {
  const { lightMode } = useContext(ThemeContext);
  const [hasToken, setHasToken] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPicture,setUserPicture] = useState({});

  useEffect(() => {
    const tokenFromStorage = sessionStorage.getItem("token");
    setHasToken(tokenFromStorage ? true : false);
    if (tokenFromStorage) {
      axiosInstance
        .post(
          "/user/info",
          {},
          {
            headers: {
              Authorization: tokenFromStorage,
            },
          }
        )
        .then((response) => {
          const user = response.data;
          setUserName(user.name);
          setUserPicture(user.pictures[0].path);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, []);

  return (
    <main className={lightMode ? "headerContainerLight" : "headerContainer"}>
      <div className="logoContainer">
        <span>Khronora</span>
      </div>
      {hasToken && (
        <div className="wellcomeUserContainer">
          <img src={userPicture} className="userImage" alt="imagen de perfil"></img>
          <h5>Hola {userName} !</h5>
        </div>
      )}
      <div className="themeBtnContainer">
        <ThemeButton />
      </div>
    </main>
  );
};

export default Header;
