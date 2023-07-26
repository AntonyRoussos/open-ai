import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                color: isActive ? "white" : "black",
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
                color: isActive ? "white" : "black",
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
