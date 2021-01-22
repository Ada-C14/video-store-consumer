import React, { useState, useEffect } from 'react';
import API from '../ApiSupport'


const SearchItem = (props) => {  
    // we need the video, info is in the props
    const clickHandler = () => {
        props.addVideoCallback(props.video)
    }
    return (
        <div>{props.video.title}
            <button onClick={clickHandler}>Add to Library</button>
            <img src={props.video.image_url} alt="video pic" />
        </div>
    )
}

export default SearchItem; 