import React, { useEffect, useState} from 'react'; 
import Video from './Video'; 
import API from '../ApiSupport'
import { Link } from 'react-router-dom';

const Library = (props) => {
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
        console.error(error);
      });
  }, []);

  

  const videoComponents = videoList.map((video) => {
    return (
      errorMessage == null ?
      <Link onClick={() => props.onVideoSelected(video)}>
        <Video 
            id={video.id}
            key={video.id}
            title={video.title}
            overview={video.overview}
            releaseDate={video.release_date} 
            imageUrl={video.image_url}
            externalId={video.external_id}
            /> </Link>
            : errorMessage
        )
  })

    return (
      <div>
        {videoComponents}
      </div>
    )
}

export default Library; 