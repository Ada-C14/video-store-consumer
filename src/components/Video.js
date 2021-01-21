import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
    return (
        <div className="video">
            <h6>{props.title}</h6>
            <p>{props.releaseDate}</p>
            <h6>{props.overview}</h6>
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