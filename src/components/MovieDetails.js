import React from 'react';
import './MovieDetails.css';
import PropTypes from 'prop-types';

const MovieDetails = ({movie}) => {
  return (
    <div className='movie-details'>
      <div className='movie-contents'>      
        <img src={movie.image_url} alt='Movie poster' />
      </div>
      <div className='movie-contents'>
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Overview: {movie.overview}</p>
      </div>
    </div>
  )
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieDetails;