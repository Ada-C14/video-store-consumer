import React, { useEffect, useState} from 'react'; 
import axios from 'axios';
import Video from './Video'; 
import API from '../ApiSupport'


const Library = () => {
  const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    API.get(`videos`)
      .then((response) => {
        const apiVideoList = response.data; 
        setVideoList(apiVideoList);
      })
      .catch((error) => {
        setErrorMessage('Could not retrieve videos from library');
      });
  }, []);

  const videoComponents = videoList.map((video) => {
    return (
        <Video 
            id={video.id}
            title={video.title}
            overview={video.overview}
            releaseDate={video.release_date} 
            imageUrl={video.image_url}
            externalId={video.external_id}
            />
        )
  })

    return (
      <div>
        {videoComponents}
      </div>
    )
}

export default Library; 