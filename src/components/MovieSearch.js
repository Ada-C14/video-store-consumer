import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MovieSearch.css';

const MovieSearch = props => {
  const [formFields, setFormFields] = useState({
    searchQuery: '',
    searchResults: []
  });

  const onInputChange = event => {
    const newFormFields = { ...formFields }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    // props.addCardCallback(formFields, targetBoard);
    // setFormFields({
    //   text: '',
    //   emoji: ''
    // });
    // setTargetBoard(props.currentBoard);
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