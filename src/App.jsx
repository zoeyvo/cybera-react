// App.js
import React from "react";
import CursorTrail from "./CursorTrail";
import "./App.scss";

function App() {
  return (
    <div className="cyberia-root">
      <CursorTrail />
      <audio id="bg-audio" src="/assets/supernova.mp3" autoPlay loop hidden />
      <header className="header"></header>
      <div className="grid-cell cell1">
        <img src="/assets/lain.gif" alt="Lain"/>
        <button className="enter-btn gothic-text">[enter]</button>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
