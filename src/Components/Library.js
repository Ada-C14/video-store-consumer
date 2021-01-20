import React, { Component, useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import Video from './Video.js'
import axios from 'axios'
const Library = (props) => {
    // state variables
    const [videoList, setVideoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // get all videos 
    useEffect(() => {
        axios.get(`${props.url}videos`)
        .then((response) => {
            setVideoList(response.data);
            setErrorMessage(null);
        })
        .catch((error) => {
            setErrorMessage(['Failed to retrieve videos in library.'])
            console.log(error.message);
        });
    }, [props.url]);
    return (
        <h1>Library</h1>
    );
}

Library.propTypes = {
    url: PropTypes.string.isRequired
};

export default Library;