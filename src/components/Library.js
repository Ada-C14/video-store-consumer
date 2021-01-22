import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Table } from 'react-bootstrap'
import SelectedVideo from './SelectedVideo'


const Library = (props) => {
  const [videoLibrary, setVideoLibrary] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        const apiVideoLibrary = response.data;
        setVideoLibrary(apiVideoLibrary);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const selectVideo = (title) => {
    axios.get(`${props.url}${props.focus}${ title }`)
      .then((response) => {
        const newSelectedVideo = response.data
        props.selectVideoCallback(newSelectedVideo)
        setErrorMessage(`"${ title }" is selected`);
      })
      .catch((error) => {
        setErrorMessage(`Unable to select "${ title }"`);
      });
  }

  const renderTableData = videoLibrary.map((video) => {
    return (
      <tr key={video.id}>
        <td>{video.id}</td>
        <td>{video.title}</td>
        <td>{video.overview}</td>
        <td>{video.release_date}</td>
        <td>
          <button
            onClick={() => selectVideo(video.title)}
          >
            Select
          </button>
        </td>
      </tr>
    )
  });

  return (
    <div>
      <h1>Video Library</h1>
      {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
      {props.selectedVideo? < SelectedVideo selectedVideo={props.selectedVideo}/> : ''}

        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Video ID</th>  
              <th>Title</th>
              <th>Overview</th>
              <th>Release Date</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>  
            {renderTableData}
          </tbody>
        </Table>
    </div>
  )
}

Library.propTypes = {
  url:PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  selectVideoCallback: PropTypes.func.isRequired,
  selectedVideo: PropTypes.object,
};

export default Library

