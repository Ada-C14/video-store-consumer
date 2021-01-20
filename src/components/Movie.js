import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = props => {
  return (
    <div>
      <img src={props.imageURL} alt={props.title}/>
      <p>{props.title}</p>
      <p>Released: {props.releaseDate}</p>
      <p>Summary: {props.overview}</p>
    </div>
  );
};

Movie.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default Movie;