import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Library = (props) => {
    const [videos, setVideos] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);

    useEffect(() => {
    axios.get(`http://localhost:3000/videos`)
    .then((response) => {
        let videoList = response.data;
        setVideos(videoList)
    })
    .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);})
    }, []);
    

    const showVideos = videos.map((video,i) => {
        return(
        <p>title={video.title}
        </p>  
        );
    });
    
    return (
        <div>
            {showVideos}
        </div>

    )

};

export default Library;
