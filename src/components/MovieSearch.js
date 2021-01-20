import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MovieSearch.css';

const MovieSearch = () => {
  const [formFields, setFormFields] = useState({
    searchQuery: '',
    searchResults: []
  });

  const onInputChange = event => {
    const newFormFields = { ...formFields }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  return (
    <div></div>
  );
};

MovieSearch.propTypes = {
  // addCardCallback: PropTypes.func.isRequired,
  // currentBoard: PropTypes.string.isRequired,
  // studentBoards: PropTypes.array.isRequired
};

export default MovieSearch;