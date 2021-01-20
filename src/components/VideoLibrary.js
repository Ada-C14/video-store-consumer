import {React, useState, useEffect} from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import axios from 'axios'
// import SelectedVideo from './components/SelectedVideo'

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
    
    const [selectedVideo, setSelectedVideo] = useState(null)

    const handleChange = ((video) => {
        setSelectedVideo(video)
    })

    const DisplaySelectedVideo = (props) => {
        return(
            <div>
                <h3>{props.video ? props.video.value.title : ''}</h3>
                <p>{props.video ? props.video.value.overview : ''}</p>
            </div>
        )
    }

    return (
        <div>
            <h3>Video Library</h3>
            <h4>Search or Select a Video: </h4>
                <Select
                    value={selectedVideo}
                    onChange={handleChange}
                    options={videos.map((video, index) => {
                    return {
                    label: video.title,
                    value: video,
                    key: index
                    };
                    })}
                />  
                <DisplaySelectedVideo video={selectedVideo}/>
        </div>
    )
}

VideoLibrary.propTypes = {}

export default VideoLibrary