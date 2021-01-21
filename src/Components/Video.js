import React, { Component, useState }  from 'react';
import PropTypes from 'prop-types';

import './Video.css';

const Video = (props) => {
    const [inventory, setInventory] = useState(0)
    const selectVideo = () => {
        props.clickButton(props.id, props.title, props.imageUrl);
    }
    return (
        <article className = 'video'>
            <h3>{props.title}</h3>
            <h4> released <span>{props.releaseDate}</span></h4>
            <img className = 'video__img' src = {props.imageUrl} alt = {`Poster for ${props.title}`}/>
            <p className = 'video__overview'>{props.overview}</p>
            <button className = {props.mode === 'library' ? 'video__select' : 'video__add'} onClick = {props.mode === 'library' ? selectVideo : () => {}}> {props.mode === 'library' ? 'select video' : 'add to library'}</button>
        </article>
    )
}

Video.propTypes = {

};

export default Video;