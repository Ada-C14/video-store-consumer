import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm'

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
        <p>This WOrks!</p>
        {video.title}
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