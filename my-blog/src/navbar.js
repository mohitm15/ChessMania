import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <nav variant="pills" className="navbar" style={{ borderBottom: "1px solid white" }}>
        <ul className="nav nav-pills">
          <li>
            <NavLink activeClassName="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/articles-list">Articles</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FAQ">FAQ</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/lichess-profile">Li-Pro</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarComponent;
