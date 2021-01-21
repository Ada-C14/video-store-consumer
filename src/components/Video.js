import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
    return (
        <div className="video">
            <p>{props.overview}</p>
            <p>{props.releaseDate}</p>
        </div>
    )
}

Video.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    externalId: PropTypes.number.isRequired
}

export default Video;