import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navlink">
          <NavLink style={({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "white" : "black",
    };
  }} to="/">Home</NavLink>
        </li>
        <li  className="navlink">
          <NavLink style={({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "white" : "black",
    };
  }}to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
