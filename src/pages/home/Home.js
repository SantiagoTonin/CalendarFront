import React, { useState, useContext, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom"; // Importa 'useNavigate' desde 'react-router-dom'
import Calendar from "react-calendar";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  apiTranslateToken,
  apiCreateCalendar,
  apiGetPostByCalendarId,
} from "../../api/axiosApi.js";
import Cell from "../../components/cellContent/Cell.js";
import "./home.css";
import "./calendar.css";

const Home = () => {
  const { lightMode } = useContext(ThemeContext);
  const [date, setDate] = useState(new Date());
  const [infoUser, setInfoUser] = useState([]);
  const [postDate, setPostDate] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiTranslateToken(
          "/user/info",
          sessionStorage.getItem("token")
        );
        setInfoUser(res.data);
        const calendarInfo = infoUser.calendar.calendarId;
        const result = await apiGetPostByCalendarId(calendarInfo);
        setPostDate(result);
      } catch (error) {
        console.log("Error al traer los datos");
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    async function fetchPostData(calendarId) {
      try {
        const calendarInfo = calendarId;
        const result = await apiGetPostByCalendarId(calendarInfo);
        setPostDate(result);
      } catch (error) {
        console.log("Error al traer los datos", error);
      }
    }
    if (infoUser.calendar && infoUser.calendar.calendarId) {
      fetchPostData(infoUser.calendar.calendarId);
    }
  }, [infoUser]);

  const onChange = (newDate) => {
    setDate(newDate);
    navigate(`/user/${infoUser.name}`, {
      state: { date: newDate.toISOString(), user: infoUser },
    });
  };

  const handleClick = async () => {
    const data = infoUser.userId;
    const res = await apiCreateCalendar(data, sessionStorage.getItem("token"));
    if (res.status === 200) {
      window.location.reload();
    }
  };

  const getdates = (date) => {
    const cells = postDate.data?.InfoDates?.cells || [];
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      const fecha1 = new Date(cell.date);
      const formato1 = fecha1.toISOString();
      const fecha2 = new Date(date);
      const formato2 = fecha2.toISOString();
      if (formato1 === formato2) {
        return cell.posts; // Devuelve los posts en la primera coincidencia
      }
    }
    return null; // Si no hay coincidencias, puedes devolver null o un valor predeterminado
  };
  
  

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const result = getdates(date);

      if (result) {
        return <Cell dayEvent={result} />;
      }
    }
    return null;
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
              tileContent={tileContent}
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
