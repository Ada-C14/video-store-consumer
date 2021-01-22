import React from 'react' 
import AddVideo from './AddVideo'
import './SearchDetail.css';

const SearchDetail = (props) => {
    if (!props.video.title) return null;

    return <div className="search-detail__container">
        <h5 className="search-detail__header">Video Details:</h5>
        <p className="search-detail__title">Title: {props.video.title}, Release Date: {props.video.release_date}</p>
        <p className="search-detail__overview">Overview: {props.video.overview}</p>
        <img className="search-detail__image"src={props.video.image_url} alt="alt"/>
        <AddVideo video={props.video} setDisplayMessage={props.setDisplayMessage}/>
    </div>
};



export default SearchDetail