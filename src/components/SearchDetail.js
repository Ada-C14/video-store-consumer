import React from 'react' 

const SearchDetail = (props) => {
    if (!props.video.title) return null;

    return <div>
        <h5>Video Details:</h5>
        <p>Title: {props.video.title}, Release Date: {props.video.release_date}</p>
        <p>Overview: {props.video.overview}</p>
        <img src = {props.video.image_url} alt="alt"/>
    </div>
};



export default SearchDetail