import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MovieSearch.css';

const MovieSearch = () => {
  const [formFields, setFormFields] = useState({
    searchQuery: '',
    searchResults: []
  });

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