import React, { useState, useContext, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { ThemeContext } from "../../context/ThemeContext";
import {useNavigate } from "react-router-dom"; // Importa 'useNavigate' desde 'react-router-dom'
import Calendar from "react-calendar";
import Sidebar from "../../components/sidebar/Sidebar";
import { apiTranslateToken, apiCreateCalendar } from "../../api/axiosApi.js";
import "./home.css";
import "./calendar.css";

const Home = () => {
  const { lightMode } = useContext(ThemeContext);
  const [date, setDate] = useState(new Date());
  const [infoUser, setInfoUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiTranslateToken(
          "/user/info",
          sessionStorage.getItem("token")
        );
        setInfoUser(res.data);
      } catch (error) {
        console.log("Error al traer los datos", error);
      }
    }
    fetchData();
  }, []);

  const onChange = (newDate) => {
    setDate(newDate);
    navigate(`/user/${infoUser.name}`, { state: { date: newDate.toISOString(), user: infoUser } });
  };

  const handleClick = async () => {
    const data = infoUser.userId;
    const res = await apiCreateCalendar(data, sessionStorage.getItem("token"));
    if (res.status === 200) {
      window.location.reload();
    }
  };

  return (
    <main className="homeMainContainer">
      <aside className="homeSide">
        <Sidebar />
      </aside>
      <article className={lightMode ? "homeContentLight" : "homeContent"}>
        <div className="calendarApp">
          <h1>Mi Calendario</h1>
          {infoUser.calendar ? (
            <Calendar
              onChange={onChange}
              value={date}
              className="calendarContainer"
            ></Calendar>
          ) : (
            <div className="buttonContainer">
              <button className="orangeButton" onClick={handleClick}>
                +NewCalendar
              </button>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};

export default Home;
