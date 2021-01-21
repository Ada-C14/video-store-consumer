import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './SelectedVideo.css';

const SelectedVideo = (props) => {
  return (
    <div>
      <tr>
        <th>Title</th>  
        <th>Overview</th>
        <th>Release Date</th>
        <th>Inventory</th>
        <th>Available Inventory</th>
      </tr>
      <tr>
        <td>{props.selectedVideo.title}</td>
        <td>{props.selectedVideo.overview}</td>
        <td>{props.selectedVideo.release_date}</td>
        <td>{props.selectedVideo.inventory}</td>
        <td>{props.selectedVideo.available_inventory}</td>
      </tr>
    </div>
  );
};

// SelectedVideo.propTypes = {
//   selectedVideo: PropTypes.arrayOf(PropTypes.shape(
//     {
//       title: PropTypes.string,
//       overview: PropTypes,
//       inventory: PropTypes.number,
//     },
//   )),
// };

export default SelectedVideo