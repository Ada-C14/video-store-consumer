import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Search = () => {
  const [errorMessage, setErrorMessage] = useState([]);
  const [query, setQuery] = useState([]);
  const [results, setResults] = useState([]);
  const API_URL_BASE = 'http://localhost:3000'

  const searchQueryOnChange = (event) => {
    console.log('new query', event.target.value)
    setQuery({
      inputValue: event.target.value
    })
  }
  useEffect(() => {
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
  }, []);

  const submitSearch = (event) => {
    event.preventDefault();
    this.props.filterBySearchTerm(this.state.query)
    this.setQuery({
    query: ''
    })
  }
    

  const Result = (props) => {
    return (
      <div>
        {props.title} - {props.overview} - {props.release_date}
        {/* <img alt= "Movie Poster"> {props.image_url}</img> */}
      </div>
      
    );
  }

  const searchResults = results.map((result) => {
    <Result title={result.title}
    key={result.id} />
  })

    return (
      <div> helllooooo </div>
    );
};

export default Search;