import React from "react";
import logo from "../images/logo.png";
import title from "../images/title.png";
import "../styles/nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <img src={title} alt="title" />
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Nav;
