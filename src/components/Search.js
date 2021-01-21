import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm'
import Select from 'react-select'
import Videos from './Videos'
import './Search.css'

const Search = ({ videoURL }) => {
  const [videoResult, setVideoResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  //const []

  const getVideo = (video) => {
    axios.get(videoURL, {
      params: {
        query: video
      }
    })
      .then((response) => {
        const result = response.data;
        setVideoResult(result);
      })
      .catch((error) => {
        console.log(errorMessage);
        setErrorMessage(error.message);
      });
  }
  // add the selected Video (clicked on) to the video library 
  const imageClick = (video) => {
    console.log(video.title);
    axios.post(videoURL, video)
      .then((response) => {
        <Videos newVideo={response.data} />
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      return (
        <div></div>
      );

    // <Videos newVideo={videoResult}/>
  }

  const showVideoResult = videoResult.map((video) => {
    return (
      <div className='image-container'>
        {/* TODO:
        Conditional Rendering, if title, show the image, if not say "sorry, not found" or something like that :) */}
        <img
          src={video.image_url}
          alt={video.title}
          onClick={() => imageClick(video)} />
          <figcaption
          className='image-caption'>
            <h1>Add</h1>
          </figcaption>
      </div>
    );
  })



  return (
    <div id='wrapper'>
      <SearchForm
        getVideo={getVideo} />
      <section className='video'>
        {showVideoResult}
      </section>
    </div>
  )
};

Search.propTypes = {

};

export default Search;