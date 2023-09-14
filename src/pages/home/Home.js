import React, { useState, useContext } from "react";
import "react-calendar/dist/Calendar.css";
import { ThemeContext } from "../../context/ThemeContext";
import Calendar from "react-calendar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import "./calendar.css";

const Home = () => {
  const { lightMode } = useContext(ThemeContext);
  const [date, setDate] = useState(new Date());

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
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="calendarContainer"
          />
        </div>
      </article>
    </main>
  );
};

export default Home;
