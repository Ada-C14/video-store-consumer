import { useEffect, useState } from 'react';
import Video from './Video.js'
import './VideoLibrary.css';
import './VideoSearch.css';
import propTypes from 'prop-types';
import axios from 'axios';



const VideoLibrary = (props) => {
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

  const videoLibraryComponent = videos.map((video) => {
    return ( <Video 
      key={video.id}
      id={video.id}
      title={video.title}
      imageURL={video.image_url}
      overview={video.overview}
      // onVideoClickCallback={}
        />
    )
  })

  return (
    <div className='VideoLibrary'>
      <h3> Video Library</h3>
      { videoLibraryComponent }
      {/* {errorMessage ? <div><h2 className="error-display">{errorMessage}</h2></div> : ''} */}
    </div>
  );
};

VideoLibrary.propTypes = {
  url: propTypes.string.isRequired
};

export default VideoLibrary;