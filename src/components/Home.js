import React, { useState, useEffect } from 'react';
import './Home.css';
const BASE_URL = 'http://localhost:3000/videos';
const axios = require('axios');

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL)

    .then((response) => {
      setVideos(response.data);
    });

  }, []);

  return (
    <div className="home">
      {
        videos.map((video) => <img src={ video.image_url } alt={ `${video.title}` } />)
      }
    </div>
  )
};

export default Home;