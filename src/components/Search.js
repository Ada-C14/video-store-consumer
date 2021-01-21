import React, { useState } from 'react';
import './Search.css';
import DisplayVideoDetail from './DisplayVideoDetail';
import Title from './Title';
const BASE_URL = 'http://localhost:3000/videos';
const axios = require('axios');

const Search = (props) => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [selectedVideo, setSelectedVideo] = useState([]);

  const searchVideos = () => {
    axios.get(BASE_URL, {
      params: {
        query: searchTerm,
      },
    }).then((response) => {
      setVideos(response.data);
    });
  }

  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value)
    searchVideos()
  }

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  const addToLibraryCallback = (video) => {
    axios.post(BASE_URL, video).catch((error) => {
      alert(error.response.data.errors)
    });
  }

  return (
    <div className='form-control container' style={ { textAlign: 'center'} }>
      <input className='form-control form-control-sm' type='text' value={ searchTerm } onChange={ editSearchTerm } placeholder='Enter a video title...' />
      <br></br>
      <h3>Here are the search results:</h3>
      <div className="container pt-4">
        <div className="row">
          <div className="col">
            {
              videos.map(video => <Title key={ video.external_id } video={ video } selectVideo={ selectVideo } />)
            }
          </div>
          <div className="col">
            {
              selectedVideo &&
              <DisplayVideoDetail addToLibraryCallback={ addToLibraryCallback } video={ selectedVideo } />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;