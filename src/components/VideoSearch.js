import React, { useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const VideoSearch = () => {
  const [input, setInput] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => setInput(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getMovies();
    }
  };

  const getMovies = async () => {
    const results = await axios
      .get(`http://localhost:3000/videos?query=${input}`)
      .then((response) => {
        return response.data;
      });
    setSearchResults(results);
  };

  return (
    <>
      <div className="customer-padding">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="searchMovies"
              type="text"
              className="validate"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={input}
              placeholder="Search Movies"
            />
          </div>
        </div>

        <div className="card-list">
          {searchResults.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoSearch;
