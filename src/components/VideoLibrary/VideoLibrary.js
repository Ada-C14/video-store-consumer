import React, { useEffect } from 'react'
import axios from 'axios'
import Video from './Video'
import './VideoLibrary.css'

const VideoLibrary = ({ baseUrl, videoLibrary, setVideoLibraryCallback, setSelectedVideoCallback, setErrorMessage }) => {

  useEffect(() => {
    axios.get(baseUrl+'videos')
      .then( response => {
        setVideoLibraryCallback(response.data)
      })
      .catch( error => {
        const errors = error.response.data.errors
        setErrorMessage(errors)
      })
  }, [])


  const videoComponents = videoLibrary.map((video) => {
    return(<Video key={video.id} video={video} setSelectedVideoCallback={setSelectedVideoCallback}/>)
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

export default VideoLibrary