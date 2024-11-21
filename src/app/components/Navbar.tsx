import React from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import "@/app/styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-flex">
            <div className="navbar-brand"><b>Hassan Jaffer</b></div>
            <ul className="navbar-links">
                <li className="menuLink"><a href="#hero"><b>Home</b></a></li>
                <li className="menuLink"><a href="#about"><b>About</b></a></li>
                <li className="menuLink"><a href="#projects"><b>Projects</b></a></li>
                <li className="menuLink"><a href="#contact"><b>Contact</b></a></li>
            </ul>
            <BiMenuAltRight className="navbar-menu-icon" size={40} />
        </div>
    </div>
  );
};

export default Navbar;
