import React from 'react';
import PropTypes from 'prop-types';
// import Search from './Search';
// import SearchForm from './SearchForm';

const Video = (props) => {
    return (
        <div className="video">
            <ul>
                <h3>{props.title}</h3>
                <img src={props.image_url} alt="video cover"/>
                <p>{props.overview}</p>
                <p>Release date: {props.release_date}</p>
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


// /**
//  * SearchedMovie.propTypes = {
//     movie: PropTypes.object
//     selected
//     short

// }
//  */