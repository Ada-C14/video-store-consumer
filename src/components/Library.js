import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LibraryVideo from './LibraryVideo.js';
import './Library.css';

const Library = (props) => {
  const API_BASE_URL = 'http://localhost:3000';

  const [libraryVideos, setLibraryVideos] = useState([])
  const [active, setActive] = useState('')

  useEffect(() => {
    axios.get(API_BASE_URL + '/videos')
      .then( (response) => {
        setLibraryVideos(response.data);
      })
      .catch( (error) => {
        //todo: update this to display to the screen
        console.log(error.message);
      })
  }, [])

  const libraryVideoComponents = libraryVideos.map(video => {
    return <LibraryVideo key={video.id} data={video} videoCallback={props.videoCallback} activeCallback={setActive} isActive={active === video.id} />
  })

  return (
    <div className="library">
      <div className="library__content">
        {libraryVideoComponents}
      </div>
    </div>
  )
  // see list of all videos in the library
  // make get request to rails API
  // return response as video components??
}

export default Library;