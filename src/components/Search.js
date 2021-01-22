import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import Video from './Video';
import PropTypes from 'prop-types';
import axios from 'axios';

const Search = (props) => {

    const API_URL_BASE = 'http://localhost:3000/'

    const [videosList, setVideosList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [selectedVideosIds, setSelectedVideosIds] = useState({});

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
    //collect ids of videos that were selected
    const selectVideo = (event) => {
        const selectedVideosIdsNew = {...selectedVideosIds};

        selectedVideosIdsNew[event.target.value] = event.target.checked;
        //value = video id, if video was checked than value will be true
        setSelectedVideosIds(selectedVideosIdsNew);
    }

    //filtering video from videosList, that has corresponding id in selectedVideosIds
    const getSelectedVideos = () => {
        return videosList.filter((video) => selectedVideosIds[video.external_id]);
    }

    // save selected videos and send them (as array within videos obj) as a parameter to the api
    const addToLibrary = () => {
        const selectedVideos = getSelectedVideos();

        axios.post(API_URL_BASE + 'videos', {videos: selectedVideos})
        .then((response) => {
            setSelectedVideosIds({});
            alert(`Successfully added to the library`);
        })
        .catch((error) => {
            setErrorMessage(error.message);
            alert(`Successfully added to the library`);
        });

    }

    const videosComponentsList = videosList.map((video) => {
        return <div key={`div${video.external_id}`}>

            <input type="checkbox" 
            value={video.external_id} //value of the checkbox is video id
            // check if selectedVideosIds contains video with corresponding id with true value
            checked={selectedVideosIds[video.external_id]?true:false} 
            onChange={selectVideo}
            className="checkbox"
            />
            <Video
                title={video.title}
                overview={video.overview}
                releaseDate={video.release_date}
                image_url={video.image_url}
                id={video.external_id}
                key={video.external_id}
            />
        </div>
    })
    return (
        <div className="search">
            <SearchForm onSubmitCallback={searchVideo} className="form"/>
            {/* if nothing was selected the button is disabled */}
            <button 
            disabled={getSelectedVideos().length===0}
            onClick={addToLibrary}
            > 
                Add selected to the library
            </button>
            {errorMessage ? <div>{errorMessage}</div> : '' }
            {videosComponentsList}
        </div>
        );
    };


Search.propTypes = {
    title: PropTypes.string,
};

export default Search;