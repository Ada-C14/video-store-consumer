import React, { useState } from 'react';
import SearchForm from './SearchForm';
import Video from './Video';
import PropTypes from 'prop-types';
import axios from 'axios';

const Search = (props) => {

    const API_URL_BASE = 'http://localhost:3000/'

    const [videosList, setVideosList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    // useEffect(() => {
    //     axios.get(API_URL_BASE)
    //     .then((response) => {
    //         const foundVideos = response.data;
    //         setVideosList(foundVideos);
    //     })
    //     .catch((error) => {
    //         setErrorMessage(error.message);
    //     });
    // },[]);

    const searchVideo = (title) => {
        axios.get(`${API_URL_BASE}videos/?query=${title}`)
        .then((response) => {
            setVideosList(response.data);
            setErrorMessage('')
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
    }

    const videosComponentsList = videosList.map((video) => {
        return <Video
        title={video.title}
        overview={video.overview}
        release_date={video.release_date}
        image_url={video.image_url}
        id={video.external_id}
        key={video.id}
        />
    })
    return (
        <div>
        <SearchForm onSubmitCallback={searchVideo} />
        {errorMessage ? <div>{errorMessage}</div> : '' }
        {videosComponentsList}
        </div>
        );
    };


Search.propTypes = {
    title: PropTypes.string,
};

export default Search;