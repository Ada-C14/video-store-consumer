import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Videos.css'
import Search from './Search'

const Videos = ({ videoURL, onVideoSelected }) => {
  const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(videoURL)
      .then((response) => {
        const videos = response.data;
        setVideoList(videos);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }, []);

  const showVideos = videoList.map((video) => {
    const helperFunction = () => {
      onVideoSelected(video)
    }

    return (
      <div key={video.id}>
        <img
          className='video'
          src={video.image_url}
          alt={video.title} />
        <button onClick={helperFunction}>Select for checkout</button>
        {/* TODO, decide what else to include?
        Choices are:
        overview
        release_date
        image_url
        external_id */}
      </div>
    )
  })


  return (
    <div className='video'>
      {showVideos}
    </div>
  )

};

Videos.propTypes = {

};

export default Videos;