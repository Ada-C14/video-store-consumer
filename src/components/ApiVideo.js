import React from 'react';
import PropTypes from 'prop-types';
import './ApiVideo.css';

const ApiVideo = (props) => {
  // event handlers
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addVideoCallback({
      externalId: props.externalId, 
      title: props.title,
      overview: props.overview,
      releaseDate: props.releaseDate,
      imageUrl: props.imageUrl,    
      inventory: 10,
    });
  }

  return (
    <figure className="video">
      <img src={props.imageUrl} alt={props.title} />
      <figcaption>{props.title} 
        <br/>{new Date(props.releaseDate).getFullYear()}
        <br/> 
          <button
            onClick={onFormSubmit}>
            Add to Library
          </button>
      </figcaption>
    </figure> 
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
