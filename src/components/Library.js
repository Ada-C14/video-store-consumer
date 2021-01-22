import axios from 'axios';
import React, { useState,useEffect } from 'react';
import './Library.css';
import SelectableVideo from './SelectableVideo';

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
        return (<SelectableVideo video={moviesInfo} key={moviesInfo.id} onSelectVideo={props.onSelectVideo}/>)
    })

    return (
        <div className='Video-rental-library'>
            <h1 className='body-header'>Video Rental Library</h1>
            <section className= 'grid-columns'>
            {movieComponents}
            </section>
        </div>
        
        );
    };
    
export default Library;