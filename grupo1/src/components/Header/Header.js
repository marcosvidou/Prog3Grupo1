import React from "react";
import "./Header.css"
import NavBar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="header-row">
      <div className="brand">
        <img src="/img/logoG1.png" alt="Logo" />
        <span className="team-name">EMT FILMS</span>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;