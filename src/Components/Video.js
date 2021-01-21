import React, { Component, useState }  from 'react';
import PropTypes from 'prop-types';

import './Video.css';

const Video = (props) => {
    const [inventory, setInventory] = useState(0)
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
                    type="number" min = '1' max = '25' onKeyDown={(event) => {
                        if(event.code !== 'ArrowUp'  && event.code !== 'ArrowDown') {event.preventDefault();}}}/>
                </div>
            );
        }
    }
    return (
        <article className = 'video'>
            <h3>{props.title}</h3>
            <h4> released <span>{props.releaseDate}</span></h4>
            <img className = 'video__img' src = {props.imageUrl} alt = {`Poster for ${props.title}`}/>
            <p className = 'video__overview'>{props.overview}</p>
            {inventoryButton(props.mode)}
            <button className = {props.mode === 'library' ? 'video__select' : 'video__add'} onClick = {props.mode === 'library' ? selectVideo : () => {}}> {props.mode === 'library' ? 'select video' : 'add to library'}</button>
        </article>
    )
}

Video.propTypes = {

};

export default Video;