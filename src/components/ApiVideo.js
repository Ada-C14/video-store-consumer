import React from 'react';
import PropTypes from 'prop-types';
import './ApiVideo.css';

const ApiVideo = (props) => {
  return (
    <table className="table">
      <tr>
        <th>External Id</th>  
        <th>Title</th>
        <th>Overview</th>
        <th>Release Date</th>
        <th>Image URL</th>
        <th></th>
      </tr>
      <tr>
        <th>{props.externalId}</th>  
        <th>{props.title}</th>
        <th>{props.overview}</th>
        <th>{props.releaseDate}</th>
        <th>{props.imageUrl}</th>
        <th>
          <button
            onClick={() => props.addVideoCallback(props.externalId)}>
            Add to Library
          </button>
        </th> 
      </tr>
    </table>
  )
}

ApiVideo.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  externalId: PropTypes.number.isRequired,
  addVideoCallback: PropTypes.func.isRequired,
};

export default ApiVideo;
