import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Sing in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
