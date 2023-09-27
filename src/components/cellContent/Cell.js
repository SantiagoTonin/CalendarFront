import React from "react";
import "./cell.css";

export default function cellContent({ dayEvent }) {
  const image = dayEvent[0]?.images[0]?.path;
  const task = dayEvent[0]?.tasks[0]?.postMessage;

  return (
    <div className="eventMarker">
      <span>{task}</span>
      {image ? (
        <img src={image} alt="" />
      ) : (
        <div style={{ display: "none" }}></div>
      )}
    </div>
  );
}
