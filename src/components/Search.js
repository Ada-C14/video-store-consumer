import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState([]);
  const API_URL_BASE = 'http://localhost:3000'
  useEffect(() => {
    axios.get(`${API_URL_BASE}/videos?query=<search term>`)
  }, []);
}

export default Search;