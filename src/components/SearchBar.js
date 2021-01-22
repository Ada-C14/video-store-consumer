import React from 'react';
import './SearchBar.css';
import { Navbar, Nav, NavLink,Form, FormControl, Button, Image } from 'react-bootstrap'

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
        <span className="visually-hidden" >
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
      <Button type="submit">Clear Search</Button>
    </form>
  );
};

export default SearchBar;