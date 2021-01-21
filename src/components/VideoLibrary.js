import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from './Video';

const VideoLibrary = (props) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios.get(`${props.url}/videos`)
            .then((response) => {
                const apiVideoList = response.data
                setVideos(apiVideoList);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
        }, []);

    const videoComponents = videos.map(video => {
        return (<Video 
            id={video.id}
            title={video.title}
            overview={video.overview}
            release_date={video.releaseDate}
            image_url={video.imageUrl}
            external_id={video.externalId} 
            key={video.id} 
        />);
    });

    const selectVideo = (id) => {
        if (selectedVideo != null) {
            let video = videos.find(video => video.id === id);
            setSelectedVideo(video);
        } else {
            setSelectedVideo(null)
            let video = videos.find(video => video.id === id);
            setSelectedVideo(video);
        }
    }

    return (
        <div>
            <h3>Our Video Library</h3>
            <h6>Current Selected Video: {selectedVideo}</h6>
            <p>{errorMessage}</p>
            {videoComponents}
        </div>
    );
}

VideoLibrary.propTypes = {
    url: PropTypes.string.isRequired
}

export default VideoLibrary;
