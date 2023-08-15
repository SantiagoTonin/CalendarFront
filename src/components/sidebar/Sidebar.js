import React, { useState, useEffect} from "react";
import { FaBars, FaEnvelopeOpenText, FaCartPlus } from "react-icons/fa";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { IoMdHelpCircle, IoIosPaper, IoMdPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInit.js";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [token, setToken] = useState("");
  const [userRol, setUserRol] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      getAuthStatus();
      setToken(token);
    } else setToken("");
  }, []);

  useEffect(() => {
    if (token) {
      
    }
  }, [userRol]);

  const getAuthStatus = async () => {
    try {
      const { data } = await axiosInstance.get("/user?rol=");
      setUserRol(data?.rol);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  const handleLogOut = () => {
    sessionStorage.clear();
    window.location.replace("/");
  };

  return (
    <>
      <section className="navbar">
        <Link to="#" className="menuIcon">
          <FaBars onClick={showSidebar} />
        </Link>
        <Link href="/home" className="navIcons">
          <AiFillHome />
        </Link>
        {userRol === "ADMINISTRADOR" ? (
          <Link href="#" className="navIcons">
            <IoIosPaper />
          </Link>
        ) : null}
        <Link href="#" className="navIcons">
          <FaEnvelopeOpenText />
        </Link>
        <Link href="#" className="navIcons">
          <FaCartPlus />
        </Link>
        <Link href="#" className="navIcons" onClick={handleLogOut}>
          <IoMdPeople />
        </Link>
        <Link href="#" className="navIcons">
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
          <>
            <section className="navbar">
              <Link to="/home" className="navText">
                <AiFillHome /> Home
              </Link>
              {userRol === "ADMINISTRADOR" ? (
                <Link to="#" className="navText">
                  <IoIosPaper /> Usuarios
                </Link>
              ) : null}
              <Link to="#" className="navText">
                <FaEnvelopeOpenText /> Mensajes
              </Link>
              <Link to="#" className="navText">
                <FaCartPlus /> Perfil
              </Link>
              <Link to="#" className="navText" onClick={handleLogOut}>
                <IoMdPeople /> Logout
              </Link>
              <Link to="#" className="navText">
                <IoMdHelpCircle /> Ayuda
              </Link>
            </section>
          </>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
