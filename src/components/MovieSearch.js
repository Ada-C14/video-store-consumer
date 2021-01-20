import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './MovieSearch.css';

const MovieSearch = props => {
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
        setAlert(`Found ${formFields.searchResults.length} results for your search:`);
      })
      .catch((error) => {
        setAlert(error.message);
      })
  };

  return (
    <div></div>
  );
};

MovieSearch.propTypes = {
  url: PropTypes.string.isRequired,
  // currentBoard: PropTypes.string.isRequired,
  // studentBoards: PropTypes.array.isRequired
};

export default MovieSearch;