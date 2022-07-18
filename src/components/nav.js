import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Nav = (props) => {
  return (
    <nav id="nav">
      <HashLink className="nav-home" to="/" exact>REALTOR</HashLink>
      <div className="nav-links">
        <HashLink className="nav-item" smooth to="/#about">ABOUT</HashLink>
        <HashLink className="nav-item" smooth to="/#projects">PROJECTS</HashLink>
        <HashLink className="nav-item" smooth to="/#packages">PACKAGES</HashLink>
        <HashLink className="nav-item" smooth to="/#book">BOOK</HashLink>
      </div>
    </nav>
  );
};

export default Nav;
