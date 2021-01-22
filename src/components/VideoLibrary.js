import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import axios from 'axios';

const VideoLibrary = (props) => {
    const [videoList, setVideoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get(`${props.url}/videos`)
        .then((response) => {
            const apiVideoList = response.data
            setVideoList(apiVideoList);
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
        }, []);

    const videoComponents = videoList.map(video => {
        return (<Video 
            id={video.id}
            title={video.title}
            overview={video.overview}
            releaseDate={video.release_date}
            imageUrl={video.image_url}
            // externalId={video.external_id} 
            key={video.id} 
            onClickCallback={props.onClickCallback}
        />);
    });

    return (
        <div>
            <h2 className="header">📼 Library 📼</h2>
            {errorMessage ? <p className="error-msg">{errorMessage}</p> : ''}
            {videoComponents}
        </div>
    );
}

VideoLibrary.propTypes = {
    url: PropTypes.string.isRequired,
    onClickCallback: PropTypes.func.isRequired  
}

export default VideoLibrary;
