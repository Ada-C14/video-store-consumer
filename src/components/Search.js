import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Result from './Result';

const Search = () => {
  const [errorMessage, setErrorMessage] = useState([]);
  const [query, setQuery] = useState([]);
  const [results, setResults] = useState([]);

  const API_URL_BASE = 'http://localhost:3000'

  const fetchSearchResults = (query) => {
    axios.get(`${API_URL_BASE}/videos?query=${query}`)
    .then((response) => {
      let newSearch = response.data;
      setResults(newSearch)
      console.log(results)

    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
    
  }

  const searchQueryOnChange = (event) => {
    const query = event.target.value;
    setQuery(query);
    fetchSearchResults(query)
};



  const searchResults = results.map((result) => {
    return(
    <Result title={result.title} 
    release_date={result.release_date}
    key={result.id} />
    )
  })

    return (
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Search for..."
            onChange={searchQueryOnChange}
          />
          {searchResults}
        </form>
    );
};

export default Search;