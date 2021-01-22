import React, { useEffect, useState} from 'react'; 
import axios from 'axios';
import Video from './Video'; 
import API from '../ApiSupport'
import { Link } from 'react-router-dom';



const Library = (props) => {

  useEffect(() => {
    API.get(`videos`)
      .then((response) => {
        const apiVideoList = response.data; 
        props.setVideoList(apiVideoList);
      })
      .catch((error) => {
        props.setErrorMessage('Could not retrieve videos from library');
      });
  }, []);

  

  const videoComponents = props.videoList.map((video) => {
    return (
      props.errorMessage == null ?
      <Link onClick={() => props.onClickVideo(video)}>
        <Video 
            id={video.id}
            title={video.title}
            overview={video.overview}
            releaseDate={video.release_date} 
            imageUrl={video.image_url}
            externalId={video.external_id}
            /> </Link>
            : props.errorMessage
        )
  })

    return (
      <div>
        {videoComponents}
      </div>
    )
}

export default Library; 