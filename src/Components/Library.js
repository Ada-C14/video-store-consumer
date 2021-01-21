import React, { Component, useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import Video from './Video.js'

import './Library.css';

const Library = (props) => {

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
                            clickButton = {props.curVid}
                            mode = 'library'
                            url = {props.url}
                            setError = {props.setError}
                            />;
            newVidList.push(vid);
        }

        return newVidList;
    }

    return (
        <div className = 'library-page'>
            <h1>video library.</h1>
            <section className = 'library'>
                {allVideos(props.videoList)}
            </section>
        </div>
    );
}

Library.propTypes = {
    url: PropTypes.string.isRequired
};

export default Library;