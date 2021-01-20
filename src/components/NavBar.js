import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Link} from 'react-router-dom';

const NavBar = () => {

  return (
    <nav>
      <Link to='/library'>all videos</Link>
      <Link to='/customers'>all customers</Link>
      <Link to='/search'>search for a video</Link>
    </nav>
  );
};

export default NavBar;