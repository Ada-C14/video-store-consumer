import React, { Component, useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import { useAlert } from 'react-alert'
import './Video.css';

const Video = (props) => {
    // inventory button checks -- will happily take better suggestions
    const VALID_KEYS = ['ArrowUp', 
                        'ArrowDown', 
                        'ArrowLeft',
                        'ArrowRight',
                        'Backspace',
                        'Delete',
                        'Digit0',
                        'Digit1', 
                        'Digit2', 
                        'Digit3', 
                        'Digit4', 
                        'Digit5', 
                        'Digit6', 
                        'Digit7', 
                        'Digit8', 
                        'Digit9']

    // params to add video
    const videoParams = {// eslint-disable-next-line camelcase
                    external_id: props.externalId,
                    title: props.title,
                    overview: props.overview,
                    inventory: 0,
                    // eslint-disable-next-line camelcase
                    image_url: props.imageUrl,
                    // eslint-disable-next-line camelcase
                    release_date: props.releaseDate};
    const alert = useAlert(); // flash success messages
    const [inventory, setInventory] = useState(1); // track inventory
    const selectVideo = () => {
        props.clickButton(props.id, props.title, props.imageUrl);
    }

    // check to update list
    // an extra state variable was created to ONLY update vidList if a video was added
    useEffect(()=>{
        if(props.vidAdded) {
            videoParams.id = props.externalId;
            props.videoList.push(videoParams);
            props.setVidAdded(false);
        }
    },[props.vidAdded]);

    // increase/decrease inventory

    const changeInventory = (event) => {
        if(!isNaN(event.target.value)) {
            setInventory(event.target.value);
        }
    }

    // conditional button
    const inventoryButton = (mode) => {
        if (mode === 'add') {
            return(
                < div className = "video__inventory">
                    <h4> add inventory</h4>
                    <input className="video__inventory-button" name="inventory" value={inventory} onChange={changeInventory}
                    type="number" min = '1' onKeyDown={(event) => {
                        if(!VALID_KEYS.includes(event.code)) {event.preventDefault();}}}/>
                </div>
            );
        }
    }

    const addVideo = () => {
        videoParams.inventory = inventory;
        axios.post(props.url, videoParams)
        .then((response)=> {
            console.log('here');
            console.log(response);
            alert.show(`${inventory} copy/copies of ${videoParams.title} successfully added to library!`)
            props.setError(null);
            props.setVidAdded(true);
        })
        .catch((error)=>{
            console.log(error);
            props.setError([error.message.toLowerCase(), 'check that your inventory number is more than 0 and that video is not currently in library']);
            return false; // prevent useEffect in App.js from updating videoList
        });
    }
    return (
        <article className = 'video'>
            <h3>{props.title}</h3>
            <h4> released <span>{props.releaseDate}</span></h4>
            <img className = 'video__img' src = {props.imageUrl} alt = {`Poster for ${props.title}`}/>
            <p className = 'video__overview'>{props.overview}</p>
            {inventoryButton(props.mode)}
            <button className = {props.mode === 'library' ? 'video__select' : 'video__add'} onClick = {props.mode === 'library' ? selectVideo : addVideo}> {props.mode === 'library' ? 'select video' : 'add to library'}</button>
        </article>
    )
}

Video.propTypes = {

};

export default Video;