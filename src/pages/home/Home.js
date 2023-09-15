import React, { useState, useContext, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import Sidebar from "../../components/sidebar/Sidebar";
import { apiTranslateToken,apiCreateCalendar } from "../../api/axiosApi.js";
import "./home.css";
import "./calendar.css";

const Home = () => {
  const { lightMode } = useContext(ThemeContext);
  const [date, setDate] = useState(new Date());
  const [infoUser, setInfoUser] = useState([]);

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
  };

  const handleClick = (event) => {

  }
  const { lightMode } = useContext(ThemeContext);


  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    console.log(selectedDate);
  };
  return (
    <main className="homeMainContainer">
      <aside className="homeSide">
        <Sidebar />
      </aside>
      <article className={lightMode ? "homeContentLight" : "homeContent"}>
        <div className="calendarApp">
          <h1>Mi Calendario</h1>
          {console.log(infoUser.calendar)}
          {infoUser.calendar ? (
            <Link
              to={{ pathname: `/user/${infoUser.name}` }}
              state={infoUser}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Calendar
                onChange={onChange}
                value={date}
                className="calendarContainer"
              />
            </Link>
          ) : (
            <div className="button-container">
              <button className="orange-button">+NewCalendar</button>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};

export default Home;
