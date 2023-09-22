import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import AddPublications from "../../components/addPublications/AddPublications.js";

export default function Publications() {
  const location = useLocation();
  const { date, user } = location.state ||{};

  return (
    <main className="homeMainContainer">
      <aside className="homeSide">
        <Sidebar />
      </aside>
      <AddPublications date={date} user={user} />
    </main>
  );
}
