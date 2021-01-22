import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Video from './Video';


const VideoLibrary = (props) => {
    console.log(props.videos);
    const videoComponents = props.videos.map(video => {
        return (<Video 
            id={video.id}
            title={video.title}
            overview={video.overview}
            releaseDate={video.release_date}
            imageUrl={video.image_url}
            // externalId={video.external_id} 
            key={video.id} 
            onClickCallback={props.onClickCallback}
        />);
    });

    return (
        <div>
            <h3>Our Video Library</h3>
            {props.errorMessage ? <div><h2 className="error-msg">{props.errorMessage}</h2></div> : ''}
            {videoComponents}
        </div>
    );
}

VideoLibrary.propTypes = {
    url: PropTypes.string.isRequired,
    onClickCallback: PropTypes.func.isRequired,
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            releaseDate: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            externalId: PropTypes.number.isRequired
        })
    ),
    errorMessage: PropTypes.string.isRequired    
}

export default VideoLibrary;
