import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie.js'
import './Popup.css';

const Popup = props => {
  const movie = props.clickedMovieInfo;

  return (
    <div className='popup'>
      <img src={movie.imageURL} alt={movie.title} />
      <div className='popup-movie-info'>
        <div className='popup-movie-info__exit-button'>
          <button onClick={props.exitCallbackFn} className='exit-button'>X</button>
        </div>
        <h4>{movie.title}</h4>
        <p>Released: {movie.releaseDate}</p>
        <p>Summary: {movie.overview}</p>
      </div>
    </div>
  );
};

Popup.propTypes = {
  clickedMovieInfo: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  exitCallbackFn: PropTypes.func.isRequired
};

export default Popup;