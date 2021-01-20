import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Video from './Video';

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
    
    

    const showVideos = videos.map((video) => {
        return(
            <div>
            <input type='radio' id={video.id} name='video' value={video.title} />
            <label htmlFor={video.title}><Video key={video.id} id={video.id} title={video.title} overview={video.overview} release_date={video.release_date} /></label>
            </div>
        );
    });


    
    return (
        <div>
            {showVideos}
        </div>

    )

};

export default Library;
