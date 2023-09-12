import React from 'react';
import "./loading.css";

export default function loading() {
  return (
    <div className="loader">
      <div className="orbe" style={{"--index": 0}}></div>
      <div className="orbe" style={{"--index": 1}}></div>
      <div className="orbe" style={{"--index": 2}}></div>
      <div className="orbe" style={{"--index": 3}}></div>
      <div className="orbe" style={{"--index": 4}}></div>
    </div>
  )
}
