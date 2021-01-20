import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from './Video';

// import logo from './logo.svg';
// import './App.css';

const Videos = () => {
  
  const [videoList, setVideosList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const VIDEO_URL = 'http://localhost:3000/videos'

  useEffect(() => {
    axios.get(VIDEO_URL)
      .then((response) => {
        // console.log(response.data);
        const railsVideoList = response.data;
        // console.log(apiCustomerResponse[0].name)
        // Set the state
        setVideosList(railsVideoList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  const generateVideos = (videos) => {
    let videoComponentArray = [];

  for (const video of videos) 

  {
    videoComponentArray.push(
      <Video
          key={video.id}
          id={video.id}
          title={video.title}
      />
    )
  }

    return videoComponentArray;
  }; 

    return (
      <div>
        Video List
        {generateVideos(videoList)}
      </div>
    );
  }

Videos.propTypes = {
  // DONT FORGET TO FILL ME OUT!
  // addCardCallback: PropTypes.func.isRequired
  };
  

export default Videos;
