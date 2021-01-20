import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
    
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td><img src={props.image_url} alt={props.title}/></td>
            <td>{props.overview}</td>
        </tr>
    )
}

Video.propTypes = {
    key: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    overview: PropTypes.string,
    externalId: PropTypes.number,
};

export default Video;