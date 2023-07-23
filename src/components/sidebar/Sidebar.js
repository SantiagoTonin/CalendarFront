import React, { useState } from "react";
import { FaBars, FaEnvelopeOpenText, FaCartPlus } from "react-icons/fa";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { IoMdHelpCircle, IoIosPaper, IoMdPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData.js";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <section className="navbar">
          <Link to="#" className="menuIcon">
            <FaBars onClick={showSidebar} />
          </Link>
          <Link href="/home" className="navIcons">
            <AiFillHome />
          </Link>
          <Link href="/" className="navIcons">
            <IoIosPaper />
          </Link>
          <Link href="#" className="navIcons">
            <FaCartPlus />
          </Link>
          <Link href="#" className="navIcons">
            <IoMdPeople />
          </Link>
          <Link href="#" className="navIcons">
            <FaEnvelopeOpenText />
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
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
