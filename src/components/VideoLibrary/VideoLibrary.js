import React, { useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import Video from './Video'
import './VideoLibrary.css'

const VideoLibrary = ({ baseUrl, videoLibrary, setVideoLibraryCallback, setVideo, setErrorMessage }) => {

  useEffect(() => {
    axios.get(baseUrl+'videos')
      .then( response => {
        setVideoLibraryCallback(response.data)
        setTimeout(() => setErrorMessage(null), 6000);
      })
      .catch( error => {
        const errors = error.response.data.errors
        setErrorMessage(errors)
        setTimeout(() => setErrorMessage(null), 6000);
      })
  }, [])


  const videoComponents = videoLibrary.map((video) => {
    return(<Video key={video.id} video={video} setVideo={setVideo} currentPathname={window.location.pathname}/>)
  })

  return(
    <div>
      <h2>Video Library</h2>

      <div className="video-list">
        {videoComponents}
      </div>
    </div>
  )
}

VideoLibrary.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  videoLibrary: PropTypes.array.isRequired,
  setVideoLibraryCallback: PropTypes.func.isRequired,
  setVideo: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired
}

export default VideoLibrary