import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaBars, FaEnvelopeOpenText } from "react-icons/fa";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoMdHelpCircle, IoIosPaper, IoMdPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInit.js";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [token, setToken] = useState("");
  const [userRol, setUserRol] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      getAuthStatus(storedToken);
    } else {
      setToken("");
    }
  }, []);

  useEffect(() => {
    if (token) {
    }
  }, [userRol]);

  const getAuthStatus = async (token) => {
    try {
      const response = await axiosInstance.get("/user", {
        headers: {
          Authorization: token,
        },
      });
      setUserRol(response.data[1]?.rol);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

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
        <Link to="#" className="menuIcon" onClick={showSidebar}>
          <FaBars />
        </Link>
        <Link to="/home" className="navIcons">
          <AiFillHome />
        </Link>
        {["superADMIN", "ADMIN"].includes(userRol) && (
          <Link to="#" className="navIcons">
            <IoIosPaper />
          </Link>
        )}
        <Link to="#" className="navIcons">
          <FaEnvelopeOpenText />
        </Link>
        <Link to="/userProfile" className="navIcons">
          <IoMdPeople />
        </Link>
        <Link to="#" className="navIcons" onClick={handleLogOut}>
          <FiLogOut />
        </Link>
        <Link to="#" className="navIcons">
          <IoMdHelpCircle />
        </Link>
      </section>
      <nav className={sidebar ? "navMenu active" : "navMenu"}>
        <ul className="navMenuItems" onClick={showSidebar}>
          <li className="navToggle">
            <Link to="#" className="menuIcon">
              <AiOutlineClose />
            </Link>
          </li>
          <section className="navbar">
            <Link to="/home" className="navText">
              <AiFillHome /> Home
            </Link>
            {["superADMIN", "ADMIN"].includes(userRol) && (
              <Link to="#" className="navText">
                <IoIosPaper /> Usuarios
              </Link>
            )}
            <Link to="#" className="navText">
              <FaEnvelopeOpenText /> Mensajes
            </Link>
            <Link to="/userProfile" className="navText">
              <IoMdPeople /> Perfil
            </Link>
            <Link to="#" className="navText" onClick={handleLogOut}>
              <FiLogOut /> Logout
            </Link>
            <Link to="#" className="navText">
              <IoMdHelpCircle /> Ayuda
            </Link>
          </section>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
