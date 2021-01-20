import { useEffect, useState } from 'react';
import Movie from './Movie.js'
import './MovieLibrary.css';
import './MovieSearchResults.css';
import propTypes from 'prop-types';
import axios from 'axios';

// From the video library page, I can see a list of all videos in the video library

export default function MovieLibrary() {
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/videos')
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
      {errorMessage ? <div><h2 className="error-display">{errorMessage}</h2></div> : ''}
    </div>
  )
}

