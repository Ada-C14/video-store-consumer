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
        console.log(`${props.url}videos`);
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


    // create all videos into components
    const allVideos = (vidList) => {
        let newVidList = []
        for(const video of vidList) {
            let vid = <Video id = {video.id} 
                            title = {video.title} 
                            overview = {video.overview} 
                            releaseDate = {video.release_date}
                            imageUrl = {video.image_url}
                            externalId = {video.external_id}/>
            newVidList.push(vid);
        }

        return newVidList;
    }

    // errors 
    const allErrors = (errorData) => {
        const errors = [];
        for(const error of errorData) {
        errors.push(<li>{error}</li>);
        }
    
        return errors;
    }
    return (
        <div>
            <article className = 'validation-errors-display'>
                <h3>{errorMessage ? 'Errors detected!' : ''}</h3>
                <ul className = 'validation-errors-display__list'>
                    {errorMessage ? allErrors(errorMessage) : ''}
                </ul>
            </article> 
            <h1>Library</h1>
            <section>
                {allVideos(videoList)}
            </section>
        </div>
    );
}

Library.propTypes = {
    url: PropTypes.string.isRequired
};

export default Library;