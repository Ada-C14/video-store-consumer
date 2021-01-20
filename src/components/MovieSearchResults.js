import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie.js'
import './MovieSearchResults.css';

const MovieSearchResults = props => {
  console.log(props.location.state)
  return (
    <div>

    </div>
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