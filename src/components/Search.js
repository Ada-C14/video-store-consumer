import React, { useState, useEffect } from 'react';
import Video from './components/Video'
import AddVideo from './components/AddVideo';
import PropTypes from 'prop-types';
import './Search.css'
const axios = require('axios')
const BASE_URL = 'https://localhost:3000/videos?query='



const Search = (props) => {

  const [SearchKeyWord, setSearchKeyWord] = useState('');
  const [submission, setSubmission] = useState('');
  const [searchResult, setResult] = useState('');

  const onInputChange = (event) => {
    let title = [event.target.name] = event.target.value;
    setSearchKeyWord(title);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmission(SearchKeyWord);
  };

  useEffect(() => {
    axios.get(BASE_URL + submission)
    .then((response) => {
      setResult(response.data); 
    });
  }, [submission])

  const makeSearch = searchResult.map((search) => {
    return <Video key ={search.id} video={search} onClickCallBack={onClickDetails}/>
  })

  return (
    <div>
      <h1>SEARCH</h1>
    </div>
  )
}

export default Search;