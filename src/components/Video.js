import React from 'react';
import PropTypes from 'prop-types';
// import Search from './Search';
// import SearchForm from './SearchForm';

const Video = (props) => {
    return (
        <div>
            <ul>
        <h3>{props.title}</h3>
        
        {props.overview}
        <p>Release date: {props.release_date}</p>
        {/* <a href={props.image_url}></a> */}
        </ul>
        </div>
        );
    };
    
Video.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    imageUrl: PropTypes.string,
    externalId: PropTypes.number
}
export default Video;


/**
 * SearchedMovie.propTypes = {
    movie: PropTypes.object
    selected
    short

}
 */