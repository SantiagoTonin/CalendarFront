import React, { useState, useContext } from 'react';
import { deletePost } from '../../api/axiosApi';
import { AiFillDelete } from "react-icons/ai";
import { ThemeContext } from "../../context/ThemeContext";
import './DropdownMenu.css';

function DropdownMenu({postId}) {
  const { lightMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteClick = async () => {
   const result = await deletePost(postId,sessionStorage.getItem("token"))
    setIsOpen(false);
    if(result.status === 200){
      window.location.reload();
    }
  };

  return (
    <div className="dropdown">
      <button className={lightMode ? "menuButtonLight" : "menuButton"} onClick={toggleMenu}>
        <AiFillDelete/>
      </button>
      {isOpen && (
        <div className={lightMode ? "dropdownContentLight" : "dropdownContent"}>
          <a onClick={handleDeleteClick}>Borrar Publicación</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
