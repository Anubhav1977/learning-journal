import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    marginRight: "1rem",
    color: isActive ? "black" : "gray",
    textDecoration: isActive ? "underline" : "none",
  });

  return (
    <div className="nav-container">
      <nav id="navbar">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        {/* Link and navlink are same just we can use active to style the active links using navlinks */}
        <NavLink to="/" style={linkStyle} end>
          Home
        </NavLink>{" "}
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>{" "}
        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
