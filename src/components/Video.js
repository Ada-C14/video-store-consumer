import React from 'react';
import PropTypes from 'prop-types';

import './Video.css'

const Video = (props) => {
    return (
        <div className="video">
            <img src={props.imageUrl} alt={props.title} />
            <h3 className="movie-title">{props.title}</h3>
            <p className="release-year">{props.releaseDate.substr(0, 4)}</p>
            <button onClick={() => props.onClickCallback(props)}>Select</button>
        </div>
    )
}

Video.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    externalId: PropTypes.number.isRequired,
    onClickCallback: PropTypes.func.isRequired
}

export default Video;