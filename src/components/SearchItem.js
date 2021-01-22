import React, { useState, useEffect } from 'react';
import API from '../ApiSupport'


const SearchItem = (props) => {

    return (
        <div>{props.title}
            <img src={props.image_url} alt="video pic" />
        </div>
    )
}

export default SearchItem; 