import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';


import './Search.css';

const Search = (props) => {
  const [formFields, setFormFields] = useState({
    searchTerm: '',
  });

  const onInputChange = (event) => {
    setFormFields({searchTerm: event.target.value});
    };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.searchVideoCallback(formFields.searchTerm);

    setFormFields({
      searchTerm: '',
    });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}><div>
        <label htmlFor="searchTerm">Search</label>
        <input
          name="searchTerm"
          id="searchTerm"
          onChange={onInputChange}
          value={formFields.searchTerm}
          placeholder="Enter Video Title"
        />
      <input
        type="submit"
        name="Submit"
      />
      </div>
    </form>
    {props.searchResult.map( (result, id) => (
      <SearchResult result={result} key={id} addVideoCallback={props.addVideoCallback}/>
      
))}  </div>
  )
}

Search.propTypes = {

};

export default Search;