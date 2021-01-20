import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import './Video.css';

const Video = (props) => {
    return (
        <div className = 'video_info'>
            <h3>{props.title}</h3>
            <h4> released <span>{props.releaseDate}</span></h4>
            <img className = "video__img" src = {props.imageUrl} alt = {`Poster for ${props.title}`}/>
            <p className = 'video__overview'>{props.overview}</p>
        </div>
    )
}

Video.propTypes = {

};

export default Video;