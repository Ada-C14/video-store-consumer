import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

  const clearSubmit = (e) => {
    e.preventDefault();
    props.resetCallback()
  }

  return (
    <form
      onSubmit={clearSubmit}
    >
      <label htmlFor="header-search">
        <span className="visually-hidden">
          Search Video Library
        </span>
      </label>
      <input
        value={props.searchQuery}
        onInput={(e) => props.setSearchQuery(e.target.value)}
        type="text"
        id="api-search"
        placeholder="Search Video Library"
        name="s"
      />
      <button type="submit">Clear Search</button>
    </form>
  );
};

export default SearchBar;