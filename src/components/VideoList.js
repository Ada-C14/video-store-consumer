import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import VideoButton from './VideoButton';
const BASE_URL = 'http://localhost:3000/videos';
const axios = require('axios');

const VideoList = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL)

    .then((response) => {
      setVideos(response.data);
    });

  }, []);

  const generateVideoButtons = videos.map((video) => {
    return <VideoButton key={ video.id } video={ video } onClickCallBack={ props.setSelectedVideoCallBack } />
  })

  return (
  <div className="VideoList">
    { generateVideoButtons }
  </div>);
};

VideoList.propTypes = {
  setSelectedVideoCallBack: PropTypes.func.isRequired,
};

export default VideoList;