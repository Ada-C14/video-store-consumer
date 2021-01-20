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
    
    // const [selectedVideo, setSelectedVideo] = useState(null)

    // const selectVideo = ((video) => {
    //     setSelectedVideo(video)
    //     return(
    //         selectedVideo.title
    //     )
    // })

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


    const TitleOptions = [ // this is just a test. I want to see if I can map the videos array to display as a select list. Select can also be used as a search bar!
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    // const TitleArray = videos.map((video) => 
    // {value: video.id, label: video.title}
    //     )

    return (
        <div>
            <h3>Video Library</h3>
            <h4>Search or Select a Video: </h4>
            <Select options={TitleOptions}/>
            <VideoList/>
        </div>
    )
}

VideoLibrary.propTypes = {}

export default VideoLibrary