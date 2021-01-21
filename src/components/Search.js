import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm'
import Select from 'react-select'

const Search = ({ videoURL }) => {
  const [videoResult, setVideoResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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

  const showVideoResult = videoResult.map((video) => {
    return (
      <div>
        {/* TODO:
        Conditional Rendering, if title, show the image, if not say "sorry, not found" or something like that :) */}
        <img src={video.image_url} alt={video.title}/>
      </div>
    );
  })



  return (
    <div>
      <SearchForm
        getVideo={getVideo} />
      {showVideoResult}
    </div>
  )
};

Search.propTypes = {

};

export default Search;