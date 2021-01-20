import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Select from 'react-select';

const VideoLibrary = (props) => { 
  const fullUrl = 'localhost:3000/videos';

  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect (() => {
    axios.get(fullUrl)
    .then((response) => {
      const videoList = response.data;
      console.log(videoList);
      setVideos(videoList);
    })
    .catch((error) => {
      setErrors(error.message);
      console.log(error.message);
    })
  }, [])

  const options = videos.map( (video) => {
    return (video.name);
  })

  // <Select options={options} />

      // if ( ! videos) {
      //   return (errors)
      // } else {
      //   return (
      //   <ul>
      //     {videos.map( (video) => {
      //     return(<li> {video.name} </li>)
      //   })}
      //   </ul>)
      // }

      return (
        <div className='videoLibrary'>
          {options ? options : errors }
        </div>
      )
  

}


export default VideoLibrary;