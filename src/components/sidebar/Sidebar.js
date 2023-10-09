import React, { useState, useEffect } from "react";
import { FaBars, FaEnvelopeOpenText } from "react-icons/fa";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoMdHelpCircle, IoIosPaper, IoMdPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInit.js";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [userRol, setUserRol] = useState(null); 

  useEffect(() => {
    const tokenFromStorage = sessionStorage.getItem("token");
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
          setUserRol(response.data.rol);
        })
        .catch((error) => {
          alert(error.response?.data?.message);
        });
    }
  }, []);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogOut = () => {
    sessionStorage.clear();
    window.location.replace("/");
  };

  return (
    <>
      <section className="navbar">
        <div className="menuIcon" onClick={showSidebar}>
          <FaBars />
        </div>
        <Link to="/home" className="navIcons">
          <AiFillHome />
        </Link>
        {["superADMIN", "ADMIN"].includes(userRol) && (
          <Link to="/abm" className="navIcons">
            <IoIosPaper />
          </Link>
        )}
        <Link to="#" className="navIcons" onClick={(e) => e.preventDefault()}>
          <FaEnvelopeOpenText />
        </Link>
        <Link to="/userProfile" className="navIcons">
          <IoMdPeople />
        </Link>
        <Link to="#" className="navIcons" onClick={handleLogOut}>
          <FiLogOut />
        </Link>
        <Link to="#" className="navIcons" onClick={(e) => e.preventDefault()}>
          <IoMdHelpCircle />
        </Link>
      </section>
      <nav className={sidebar ? "navMenu active" : "navMenu"}>
        <ul className="navMenuItems" onClick={showSidebar}>
          <li className="navToggle">
            <div className="menuIcon">
              <AiOutlineClose />
            </div>
          </li>
          <section className="navbar">
            <Link to="/home" className="navText">
              <AiFillHome /> Home
            </Link>
            {["superADMIN", "ADMIN"].includes(userRol) && (
              <Link to="/abm" className="navText">
                <IoIosPaper /> Usuarios
              </Link>
            )}
            <Link to="#" className="navText" onClick={(e) => e.preventDefault()}>
              <FaEnvelopeOpenText /> Mensajes
            </Link>
            <Link to="/userProfile" className="navText">
              <IoMdPeople /> Perfil
            </Link>
            <Link to="#" className="navText" onClick={handleLogOut}>
              <FiLogOut /> Logout
            </Link>
            <Link to="#" className="navText" onClick={(e) => e.preventDefault()}>
              <IoMdHelpCircle /> Ayuda
            </Link>
          </section>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
