import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink
            className="navlink"
            style={({ isActive }) => {
              return {
                color: isActive ? "green" : "black",
              };
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            style={({ isActive }) => {
              return {
                color: isActive ? "green" : "black",
              };
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
