import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './MovieSearchResults.css';

const MovieSearchResults = props => {
  console.log(props.location.state)
  return (
    <div></div>
  );
};


MovieSearchResults.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      results: PropTypes.array.isRequired
    })
  })
};

export default MovieSearchResults;