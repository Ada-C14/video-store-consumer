import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Video from './Video'
import './Library.css';

const Library = (props) => {

    const allVideosURL = 'http://localhost:3000/videos'

    const [videos, setVideos] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        axios.get(allVideosURL)
        .then((response) => {
            setVideos(
                response.data
            );
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
    }, []);

    const movieComponents = videos.map((moviesInfo) => {
        return (< Video
            id={moviesInfo.id}
            title={moviesInfo.title}
            image_url={moviesInfo.image_url}
            key={moviesInfo.id}
            onSelectedMovie={props.onSelectedMovie}
            />)
    })

    return (
        <div classname= 'Video-rental-library'>
            <h1 classname= 'body-header'>Video Rental Library</h1>
            <section classname= 'grid-columns'>
            {movieComponents}
            </section>
        </div>
        
        );
    };
    
export default Library;