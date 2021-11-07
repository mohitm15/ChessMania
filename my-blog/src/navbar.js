import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavbarComponent = () => {

  let location = useLocation();

  let tabStyle = {
    backgroundImage:
    "repeating-conic-gradient(#808080 0% 25%, black 0% 50%) ",
    // "linear-gradient(45deg, #808080 25%, transparent 25%)" 
    // "linear-gradient(-45deg, #808080 25%, transparent 25%)"
     // "linear-gradient(45deg, transparent 75%, #808080 75%)"
     //"linear-gradient(-45deg, transparent 75%, #808080 75%)"
    textShadow:'2px 0px black',
    border:'1px white solid'
 }

  return (
    <>
      <nav variant="pills" className="navbar" style={{ borderBottom: "1px solid white" }}>
        <ul className="nav nav-pills">
          <li>
            <NavLink style={location.pathname === "/" ? tabStyle:{}} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={location.pathname === "/about" ? tabStyle:{}} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink style={location.pathname === "/articles-list" ? tabStyle:{}} to="/articles-list">Articles</NavLink>
          </li>
          <li>
            <NavLink style={location.pathname === "/FAQ" ? tabStyle:{}} to="/FAQ">FAQ</NavLink>
          </li>
          <li>
            <NavLink style={location.pathname === "/lichess-profile" ? tabStyle:{}} to="/lichess-profile">Li-Pro</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarComponent;
