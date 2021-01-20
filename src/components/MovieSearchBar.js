import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './MovieSearchBar.css';

const MovieSearchBar = props => {
  const [formFields, setFormFields] = useState({
    searchQuery: '',
    searchResults: []
  });

  const [alert, setAlert] = useState(null);

  const onInputChange = event => {
    const newFormFields = { ...formFields };
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };
  
  const onFormSubmit = event => {
    event.preventDefault();
    
    const url = props.url + '/videos?query=' + formFields.searchQuery;

    axios.get(url)
      .then((response) => {
        const newFormFields = { ...formFields };
        const newQueryResults = response.data;
        newFormFields.searchResults = newQueryResults;
        setFormFields(newFormFields);
      })
      .catch((error) => {
        if (error.message === 'Request failed with status code 500'){
          setAlert(`Sorry! No movies found for '${formFields.searchQuery}'.`);
        } else {
          setAlert(error.message);
        }
      })
  };

  return (
    <div>
      { alert ? alert : '' }
      <form onSubmit={onFormSubmit}>
        <input name='searchQuery' onChange={onInputChange} value={formFields.searchQuery} placeholder='Search for a movie' />
        <button type='submit' value='Search'>Search</button>
      </form>
      { formFields.searchResults.length > 0 &&
        <Redirect to={{
          pathname: '/results',
          state: { results: formFields.searchResults, searchTerm: formFields.searchQuery }
        }}/>
      }
    </div>
  );
};

MovieSearchBar.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MovieSearchBar;