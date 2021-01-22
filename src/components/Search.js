import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import '../App.css';
import PropTypes from 'prop-types';

const Search = ({search, results, addMovie}) => {
  return (
    <div>
      <h2 className='page-title'>Search</h2>
      <SearchBar search={search}/>
      { results !== [] ? <SearchResults
        results={results} addMovie={addMovie}
      /> : '' }
    </div>
  )
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  addMovie: PropTypes.func.isRequired,
}

export default Search;