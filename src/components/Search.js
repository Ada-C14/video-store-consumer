import React, { useState, useEffect } from 'react';
import './Search.css';
import Title from './Title';
const BASE_URL = 'http://localhost:3000/videos';
const axios = require('axios');

const Search = (props) => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    axios.get(BASE_URL)

    .then((response) => {
      setVideos(response.data);
    });

  }, []);

  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }
  
  return (
    <div class='form-control container' style={ { textAlign: 'center'} }>
      <input class='form-control form-control-sm' type='text' value={ searchTerm } onChange={ editSearchTerm } placeholder='Enter a video title...' />
      <br></br>
      <h3>Here are the search results:</h3>
      {
        videos.filter(video => video.title.toLowerCase().includes((searchTerm || '').toLowerCase()))
        .map(video => <Title title={ video.title } />)
      }
    </div>
  );
};

export default Search;