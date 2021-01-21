import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Select from 'react-select';
import LibraryEntry from './LibraryEntry';

const VideoLibrary = (props) => { 
  const fullUrl = 'http://localhost:3000/videos';

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

  // const options = videos.map( (video) => {
  //   return (<LibraryEntry id={video.id} name={video.name}/>);
  // })

  videos.sort((a,b) => (a.title > b.title) ? 1 : -1)





  return (
    <div className='videoLibrary'>
      <ul>
        {videos.map( (video) => {
          return (<li key={video.id}>{<LibraryEntry id={video.id} title={video.title} libraryCallback={props.libraryCallback}/>}</li>);
          })
        }
      </ul>
    </div>
  )
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

      // return (
      //   <div className='videoLibrary'>
      //     {options ? options : errors }
      //   </div>
      // )
  

}

VideoLibrary.propTypes = {
 libraryCallback: PropTypes.func.isRequired
}

export default VideoLibrary;