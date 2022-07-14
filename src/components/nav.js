import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav id="nav">
      <NavLink className="nav-home" to="/" exact>REALTOR</NavLink>
      <div className="nav-links">
        <NavLink className="nav-item" to="/about">ABOUT</NavLink>
        <NavLink className="nav-item" to="/projects">PROJECTS</NavLink>
        <NavLink className="nav-item" to="/packages">PACKAGES</NavLink>
        <NavLink className="nav-item" to="/book">BOOK</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
