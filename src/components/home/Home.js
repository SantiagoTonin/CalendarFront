import Sidebar from "../sidebar/Sidebar";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./home.css";
import "./calendar.css";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <main>
      <aside className="homeSide">
        <Sidebar />
      </aside>
      <article className="homeContent">
        <div className="calendarApp">
          <h1>Mi Calendario</h1>
          <Calendar onChange={onChange} value={date} className="calendarContainer"/>
        </div>
      </article>
    </main>
  );
};

export default Home;
