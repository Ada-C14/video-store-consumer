import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie.js'
import './MovieSearchResults.css';

const MovieSearchResults = props => {
  console.log(props.location.state)

  const generateMovieComponents = movies => {
    const currentMovieList = [];
  
    for (let movie of movies) {
      currentMovieList.push(
        <Movie 
          key={movie.external_id}  
          title={movie.title} 
          overview={movie.overview}
          releaseDate={movie.release_date}
          imageURL={movie.image_url}
        />
      )
    }
  
    return currentMovieList;
  };

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