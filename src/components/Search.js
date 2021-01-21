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
      <form onSubmit={onFormSubmit} ><div>
        <h1>Search Video Database </h1>
        <label htmlFor="searchTerm"></label></div>
        <input className='search-bar'
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
      
    </form>
    {props.searchResult.map( (result, id) => (
      <SearchResult key={id}
        result={result} 
        addVideoCallback={props.addVideoCallback}
        videos={props.videos}/>
))}  </div>
  )
}

Search.propTypes = {
  searchVideoCallback: PropTypes.func,
  searchResult: PropTypes.array,
  addVideoCallback: PropTypes.func,
  videos: PropTypes.array,
};

export default Search;