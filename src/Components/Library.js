import React, { Component, useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import Video from './Video.js'
import axios from 'axios'

import './Library.css';

const Library = (props) => {
    // state variables
    const [videoList, setVideoList] = useState([]);

    // get all videos 
    useEffect(() => {
        console.log(`${props.url}videos`);
        axios.get(`${props.url}videos`)
        .then((response) => {
            setVideoList(response.data);
            props.setError(null);
        })
        .catch((error) => {
            props.setError(['Failed to retrieve videos in library.'])
            console.log(error.message);
        });
    }, [props]);


    const selectVideo = () => {
        props.curVid(props.id, props.title, props.imageUrl);
    }

    // create all videos into components
    const allVideos = (vidList) => {
        let newVidList = []
        for(const video of vidList) {
            let vid = <Video id = {video.id} 
                            title = {video.title} 
                            overview = {video.overview} 
                            releaseDate = {video.release_date}
                            imageUrl = {video.image_url}
                            externalId = {video.external_id}
                            />
            newVidList.push( <article className = 'video'>
                {vid}
                <button className = 'video__select' onClick = {selectVideo}> select video </button>
                </article>
                );
        }

        return newVidList;
    }

    return (
        <div className = 'library-page'>
            <h1>video library.</h1>
            <section className = 'library'>
                {allVideos(videoList)}
            </section>
        </div>
    );
}

Library.propTypes = {
    url: PropTypes.string.isRequired
};

export default Library;