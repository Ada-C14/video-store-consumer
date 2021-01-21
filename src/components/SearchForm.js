import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchForm.css';

const SearchForm = (props) => {
  const [title, setTitle] = useState('');

  const onInputChange = event => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.searchVideosCallback(title);
    setTitle('');
  };

  return (
    <form className="search-form" onSubmit={onFormSubmit}>
      <div>
        <input onChange={onInputChange} value={title} />
        <input type="submit" value="Search"/>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  searchVideosCallback: PropTypes.func.isRequired,
};

export default SearchForm;