import React from "react";
import "./Header.css"
import NavBar from "../Navbar/Navbar";

function Header() {
 
  return (
    <React.Fragment>
    <div className=""><img className="" src="../public/img/logoG1" alt="logoG1" /></div>
    <nav>
        <NavBar />
    </nav>
    </React.Fragment>
    
    
  );
}

export default Header