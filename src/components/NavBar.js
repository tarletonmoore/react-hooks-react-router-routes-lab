import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "gray",
    textDecoration: "none",
    color: "white",
  };

  return <div className="navbar">
    <NavLink exact to="/"
      style={linkStyles}>
      Home
    </NavLink>
    <NavLink to="/movies"
      style={linkStyles}>Movies</NavLink>
    <NavLink to="/directors"
      style={linkStyles}>Directors</NavLink>
    <NavLink to="/actors"
      style={linkStyles}>Actors</NavLink>

  </div>;
}

export default NavBar;
