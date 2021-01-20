import React, { Component } from 'react';
import PropTypes from 'prop-types';


// import './Video.css';

const Video = (props) => {
  return (
  <div>
    {props.title}
    {props.overview}
    {props.release_date}
  </div>
  );
};

Video.propTypes = {
  title: PropTypes.string,
  // emoji: PropTypes.string,
  // id: PropTypes.number.isRequired,
  // deleteCardCallback: PropTypes.func.isRequired
};

export default Video