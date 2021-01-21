import React, { Component, useState }  from 'react';
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

    const alert = useAlert()
    const [inventory, setInventory] = useState(1)
    const selectVideo = () => {
        props.clickButton(props.id, props.title, props.imageUrl);
    }
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
        const params = {'external_id': props.externalId,
                        title: props.title,
                        overview: props.overview,
                        inventory: inventory,
                        'image_url': props.imageUrl,
                        'release_date': props.releaseDate}
        axios.post(props.url, params)
        .then((response)=> {
            console.log(response);
            alert.show(`${inventory} copy/copies of ${params.title} successfully added to library!`)
            props.setError(null);
            props.videoList.push(params)
        })
        .catch((error)=>{
            console.log(error);
            props.setError([error.message.toLowerCase(), 'check that your inventory number more 0 and that video is not currently in library']);
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