import {React, useState, useEffect} from 'react'
import Select from 'react-select'
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
            console.log(errorMessage);
        });
    }, []);
    

    return (
        <div>
            <h3>Video Library</h3>
            <h4>Search or Select a Video: </h4>
                <Select
                    value={props.selectedVideo}
                    onChange={props.onSelectVideo}
                    options={videos.map((video, index) => {
                    
                    return {
                    label: video.title,
                    value: video,
                    key: index
                    };
                    })}
                />  
        </div>
    )
}

VideoLibrary.propTypes = {}

export default VideoLibrary