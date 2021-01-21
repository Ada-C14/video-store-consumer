import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from './Movie.js'
import Popup from './Popup.js'
import './MovieSearchResults.css';

const MovieSearchResults = props => {
  const [clickedMovie, setClickedMovie] = useState(null);
  const [alert, setAlert] = useState(null);
  const searchResults = props.location.state.results;
  const searchTerm = props.location.state.searchTerm;
  const baseURL = props.location.state.baseURL;

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
          location='search'
          addMovieClickback={addToLibrary}
        />
      )
    }
  
    return currentMovieList;
  };

  const moreInfoOnClick = movie => {
    setClickedMovie(movie);
  };

  const exitPopup = () => {
    setClickedMovie(null);
  };

  const addToLibrary = newMovie => {
    axios.post(baseURL + '/videos', newMovie)
      .then((response) => {
        setAlert(`Successfully added ${newMovie.title} to the video library.`);
      })
      .catch((error) => {
        setAlert(error.message);
      })
  };

  return (
    <div className='search-results'>
      { alert ? alert : '' }
      <h4>We found {searchResults.length} results for the movie '{searchTerm}':</h4>
      { clickedMovie 
        ? <Popup 
            clickedMovieInfo={clickedMovie} 
            exitCallbackFn={exitPopup} 
            addMovieClickback={addToLibrary}
            location='search'
          /> 
        : null 
      }
      <div className={`search-results-container ${ clickedMovie ? 'search-results-fade' : null }`}>
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
  }),
  baseURL: PropTypes.string.isRequired
};

export default MovieSearchResults;