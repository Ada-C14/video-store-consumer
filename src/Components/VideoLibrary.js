import {React, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const VideoLibrary = (props) => {
    
    const allVideosURL = 'http://localhost:3000/videos'

    const [videos, setVideos] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        axios.get(allVideosURL)
          .then((response) => {
            const RailsApiVideoList = response.data
            setVideos(RailsApiVideoList);
          })
          .catch((error) => {
            setErrorMessage(error.message);
            console.log(error.message);
          });
      }, []);

    function VideoList() {
    
    const listItems = videos.map((video) =>
        <li key={video.id}>
            {video.title}: {video.overview}
        </li>
            );
        return (
        <ul>{listItems}</ul>
        );
    }

    return (
        <div>
            <h3>Video Library</h3>
            <ul>
                
            </ul>
            <VideoList/>
        </div>
    )
}

VideoLibrary.propTypes = {}

export default VideoLibrary