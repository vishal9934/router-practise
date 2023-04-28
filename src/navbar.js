import {  NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/home" style={{ textDecoration: 'none' }}>HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about" style={{ textDecoration: 'none' }}>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={{ textDecoration: 'none' }}>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
