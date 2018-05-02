import React from 'react';
import { NavLink } from 'react-router-dom';
import Link from './Link';

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav">
      <NavLink to="/" className="navbar-brand js-scroll-trigger">
        <span className="d-block d-lg-none">Start Bootstrap</span>
        <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2"
                 src="../src/static/img/profile.jpg" alt=""/>
          </span>
      </NavLink>
      <button className="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <Link name="About"/>
          <Link name="Experience"/>
          <Link name="Education"/>
          <Link name="Skills"/>
          <Link name="Interests"/>
          <Link name="Awards"/>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
