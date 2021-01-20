import React, { useState, useEffect } from 'react';
import './VideoList.css';
import PropTypes from 'prop-types'
import Video from './Video';
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

  const generateVideo = videos.map((video) => {
    return <Video key={ video.id } video={ video } onClickCallBack= { props.setSelectedVideoCallBack } />
  })

  return (
  <div className="VideoList">
    <h3>Video List:</h3>
    { generateVideo }
  </div>);
};

VideoList.propTypes = {
  setSelectedVideoCallBack: PropTypes.func.isRequired,
};

export default VideoList;