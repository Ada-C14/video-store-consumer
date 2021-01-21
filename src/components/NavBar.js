import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Link} from 'react-router-dom';
import {Row, Col, Nav} from 'react-bootstrap';

const NavBar = (props) => {

  return (
    <Nav fill variant="tabs" defaultActiveKey={props.location?.pathname}>
      <Nav.Item>
        <Nav.Link as={Link} to="/library">all videos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/customers">all customers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/search">search for a video</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;