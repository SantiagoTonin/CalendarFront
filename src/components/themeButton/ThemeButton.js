import './themeButton.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function ThemeButton() {
  const { lightMode, setLightMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setLightMode(!lightMode);
    localStorage.setItem('lightMode', !lightMode);
  };
  return (
    <>
      <label className="switch">
        <input defaultChecked={lightMode} type="checkbox" onChange={handleTheme}/>
        <span className="slider"></span>
      </label>
    </>
  );
}

export default ThemeButton;
