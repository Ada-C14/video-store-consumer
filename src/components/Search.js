import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';

import './Search.css';

const Search = (props) => {
  const [formFields, setFormFields] = useState({
    searchTerm: '',
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.searchVideoCallback(formFields);

    setFormFields({
      searchTerm: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}><div>
    <label htmlFor="searchTerm">Search</label>
    <input
      name="searchTerm"
      id="searchTerm"
      onChange={onInputChange}
      value={formFields.searchTerm}
      placeholder="Enter Video Title"
    />
  </div>
  <input
    type="submit"
    name="submit"
  />
    </form>
  )
}

Search.propTypes = {

};

export default Search;