import { useEffect, useState } from 'react';
import Video from './Video.js'
import './VideoLibrary.css';
import './VideoSearch.css';
import propTypes from 'prop-types';
import axios from 'axios';



const VideoLibrary = (props) {
  const [videos, setVideos] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/videos')
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div className='search-results-container'>
      {videos.map((video) => 
        <Video 
          key={video.external_id}  
          title={video.title} 
          overview={video.overview}
          releaseDate={video.release_date}
          imageURL={video.image_url}
        />
      )}
      {errorMessage ? <div><h3 className="error-display">{errorMessage}</h3></div> : ''}
    </div>
  )
}