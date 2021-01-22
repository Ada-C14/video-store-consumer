import React, { useState } from 'react';
import VideoSearchForm from './VideoSearchForm';
import SearchResult from './SearchResult';
// import Video from './Video';
import PropTypes from 'prop-types';
import axios from 'axios';
import './VideoSearch.css';


const VideoSearch = (props) => {
    const BASE_URL = 'http://localhost:3000/'
    // const VIDEOSEARCH_API_PATH = 'videos?query='
    const [videos, setVideos] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const videoSearch = (title) => {
        axios.get(`${BASE_URL}videos/?query=${title}`)
        .then((response) => {
            setVideos(response.data);
            setErrorMessage('')
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
        
    }

    const videosListComponent = videos.map((video) => {
        return <SearchResult
        key={video.id}
        external_id={video.external_id}
        title={video.title}
        overview={video.overview}
        release_date={video.release_date}
        image_url={video.image_url}
        />
    })
    

    return (
        <div>
        <VideoSearchForm onSubmitCallback={videoSearch} />
        {errorMessage ? <div>{errorMessage}</div> : '' }
        {videosListComponent}
        </div>
    );
};
VideoSearch.propTypes = {
    title: PropTypes.string,
};
export default VideoSearch;