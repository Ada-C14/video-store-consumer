import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from './Video';
import './Video.css'

const VideoLibrary = (props) => {

    const [videoList, setVideoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const videosUrl = 'http://localhost:3000/videos'

    useEffect(() => {
        axios.get(videosUrl)
            .then((response) => {
                const newVideoList = response.data;
                setVideoList(newVideoList);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
    }, []);

    const videoComponents = videoList.map((video) => {
        return (
            <Video
                key={video.id}
                id={video.id}
                title={video.title}
                imageUrl={video.image_url}
                overview={video.overview}
            />
        )
    })

    return (
        <div>
            <h2>Rental Library</h2>
            <table>
                <thead>
                    <tr>ID</tr>
                    <tr>TITLE</tr>
                    <tr>IMAGE</tr>
                    <tr>OVERVIEW</tr>
                </thead>
                <tbody>
                    {videoComponents}
                </tbody>
            </table>
        </div>
    );
}

VideoLibrary.propTypes = {
    url: PropTypes.string.isRequired
};

export default VideoLibrary;