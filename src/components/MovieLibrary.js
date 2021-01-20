import { useEffect, useState } from 'react';
import Movie from './Movie.js'
import './MovieLibrary.css';
import './MovieSearchResults.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const MovieLibrary = props => {
  const [movies, setMovies] = useState([]);
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

  return (
    <div className='search-results-container'>
      {movies.map((movie) => 
        <Movie 
          key={movie.external_id}  
          title={movie.title} 
          overview={movie.overview}
          releaseDate={movie.release_date}
          imageURL={movie.image_url}
        />
      )}
      { errorMessage ? <div><h2 className="error-display">{errorMessage}</h2></div> : '' }
    </div>
  )
}

MovieLibrary.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MovieLibrary;