import { useEffect, useState } from 'react';
import Movie from './Movie.js'
import Popup from './Popup.js'
import './MovieLibrary.css';
import './MovieSearchResults.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const MovieLibrary = props => {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const url = props.url + '/videos';

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const moreInfoOnClick = movie => {
    setClickedMovie(movie);
  };

  const exitPopup = () => {
    console.log('hi')
    setClickedMovie(null);
  };

  return (
    <div>
      { clickedMovie ? <Popup clickedMovieInfo={clickedMovie} exitCallbackFn={exitPopup} /> : null }
      <div className={`search-results-container ${ clickedMovie ? 'search-results-fade' : null }`}>
        {movies.map((movie) => 
          <Movie 
            key={movie.external_id}  
            id={movie.external_id}  
            title={movie.title} 
            overview={movie.overview}
            releaseDate={movie.release_date}
            imageURL={movie.image_url}
            handleClickCallback={moreInfoOnClick}
          />
        )}
        { errorMessage ? <div><h2 className="error-display">{errorMessage}</h2></div> : '' }
      </div>
    </div>
  )
}

MovieLibrary.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MovieLibrary;