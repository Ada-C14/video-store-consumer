import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm'

const Search = ( {videoURL} ) => {
  
  

  return (
    <div>
      <SearchForm videoURL={videoURL}/>
    </div>
  )
};

Search.propTypes = {

};

export default Search;