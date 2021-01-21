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

  const onInventoryChange = (event) => {
    event.preventDefault();
    const newInventory = 
    props.addVideoCallback({
      externalId: props.externalId, 
      title: props.title,
      overview: props.overview,
      releaseDate: props.releaseDate,
      imageUrl: props.imageUrl,    
    });
  }

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
        <th><img 
              src={props.imageUrl}
              alt={props.title} />
        </th>
        <th>
        <form>
          <label>Inventory:</label>
            <input
              id="inventory"
              name="inventory"
              // onChange={onInventoryChange}
              // value={formFields.inventory}
            />
        </form>
          <button
            onClick={onFormSubmit}>
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
