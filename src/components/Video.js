import React from 'react';
import './Library.css';

const Video = (props) => {
    return (
        <div className='Video-box'>
            <h1>{props.title}</h1>
            <p>{props.overview}</p>
            <img src={props.imageUrl} alt="video pic" />
        </div>
    )
}

export default Video; 