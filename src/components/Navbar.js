import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import '../index.css';
import Logo from '../movieLogo.png';

const Navbar = () => {
  return (
    <>
      <nav className="#009688 teal z-depth-4">
        <Link to="/" className="brand-text">
          <img src={Logo} alt="Logo" className="brand-logo" />
          MoviesOnDemand
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/library">Video Library</Link>
          </li>
          <li>
            <Link to="/customers">Customer List</Link>
          </li>
        </ul>
      </nav>

      {/* banner for homepage */}
    </>
  );
};

export default Navbar;
