import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {

    const onButtonClick = () => {
        const selected = {
            id: props.id,
            title: props.title
        }
        props.selectVideoCallback(selected);
      }

    return (
        <tr>
            <td className="tableItem">{props.id}</td>
            <td className="tableItem">{props.title}</td>
            <td className="tableItem">{selectedVideo? <button className="selected" onClick={onButtonClick}>SELECTED</button> : <button className="select" onClick={onButtonClick}>SELECT</button> }</td>
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
    selectedVideo: PropTypes.object,
    selectVideoCallback: PropTypes.func
};

export default Video;