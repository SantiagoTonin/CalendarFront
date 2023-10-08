import React, { useState } from 'react';
import { deletePost } from '../../api/axiosApi';
import './DropdownMenu.css';

function DropdownMenu({postId}) {
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
      <button className="menu-button" onClick={toggleMenu}>
        ...
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a onClick={handleDeleteClick}>Delete Post</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
