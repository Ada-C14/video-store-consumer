import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {

    return (
        <tr>
            <td className="tableItem">{props.id}</td>
            <td className="tableItem">{props.title}</td>
            <td className="tableItem"><button className="select">SELECT</button></td>
            <td className="tableItem">{props.overview}</td>
        </tr>
    )
}

Video.propTypes = {
    key: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    overview: PropTypes.string,

};

export default Video;