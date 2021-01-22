import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Result from './Result';

const Search = (props) => {
  const [formField, setFormField] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null);
  const [results, setResults] = useState([]);

  const onInputChange = (event) => {
    setFormField(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (formField !== null) {
      fetchSearchResults(formField)
    }
    
    setFormField(null)
  }

  const fetchSearchResults = (query) => {
    
    axios.get(`${props.url}/videos?query=${query}`)
    .then((response) => {
      const newSearch = response.data;
      setResults(newSearch)
      console.log(results)

    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
    
  }

  const searchResults = results.map((result) => {
    return(
    <Result object={result} title={result.title} overview={result.overview}
    release_date={result.release_date}
    key={result.id} url={props.url} />
    )
  })

  return (
    <form onSubmit={onFormSubmit} >
      <h1>Search for movies:</h1>
      <label hrmlFor="searchTerm">Search</label>
      <input className='search-bar'
        name="searchTerm"
        id="searchTerm"
        onChange={ onInputChange }
        value={formField}
        placeholder="Search for..." 
      />
      <input type="submit" name="Submit" />
      { searchResults }
    </form>
  );
};

export default Search;