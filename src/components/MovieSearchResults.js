import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie.js'
import Popup from './Popup.js'
import './MovieSearchResults.css';

const MovieSearchResults = props => {
  const [clickedMovie, setClickedMovie] = useState(null);
  const searchResults = props.location.state.results;
  const searchTerm = props.location.state.searchTerm;

  const generateMovieComponents = movies => {
    const currentMovieList = [];
  
    for (let movie of movies) {
      currentMovieList.push(
        <Movie 
          key={movie.external_id}  
          id={movie.external_id}  
          title={movie.title} 
          overview={movie.overview}
          releaseDate={movie.release_date}
          imageURL={movie.image_url}
          handleClickCallback={moreInfoOnClick}
        />
      )
    }
  
    return currentMovieList;
  };

  const moreInfoOnClick = movie => {
    setClickedMovie(movie);
  };

  const exitPopup = () => {
    console.log('hi')
    setClickedMovie(null);
  };

  return (
    <div>
      <h4>We found {searchResults.length} results for the movie '{searchTerm}':</h4>
      <div className='search-results-container'>
        { clickedMovie ? <Popup clickedMovieInfo={clickedMovie} exitCallbackFn={exitPopup} /> : null }
        { generateMovieComponents(searchResults) }
      </div>
    </div>
  );
};


MovieSearchResults.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      results: PropTypes.array.isRequired,
      searchTerm: PropTypes.string.isRequired
    })
  })
};

export default MovieSearchResults;