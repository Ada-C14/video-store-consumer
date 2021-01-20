import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import './Video.css';

const Video = (props) => {


    return (
        <article className = "video">
            <h3>{props.title}</h3>
            <h4> Released: {props.releaseDate} </h4>
            <img src = {props.imageUrl} alt = {`Poster for ${props.title}`}/>
            <p>{props.overview}</p>
        </article>
    )
}

Video.propTypes = {

};

export default Video;