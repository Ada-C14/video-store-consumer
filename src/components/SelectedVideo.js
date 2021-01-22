import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './SelectedVideo.css';
import { Navbar, Nav, NavLink,Form, FormControl, Button, Image, Table } from 'react-bootstrap'

const SelectedVideo = (props) => {  
  return (
    <Table striped bordered hover variant='dark' size='sm'>
      <thead>
        <tr>
          <th>Title</th> 
          <th>Image</th>  
          <th>Overview</th>
          <th>Release Date</th>
          <th>Inventory</th>
          <th>Available Inventory</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.selectedVideo.title}</td>
          <td><img src={props.selectedVideo.image_url} alt={props.selectedVideo.title} /></td>
          <td>{props.selectedVideo.overview}</td>
          <td>{props.selectedVideo.release_date}</td>
          <td>{props.selectedVideo.inventory}</td>
          <td>{props.selectedVideo.available_inventory}</td>
        </tr>
      </tbody>
    </Table>
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