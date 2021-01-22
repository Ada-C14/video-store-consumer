import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
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
        setErrorMessage(`Success! Selected ${ title }`);
      })
      .catch((error) => {
        setErrorMessage(`Unable to select "${ title }"`);
      });
  }

  const renderTableData = videoLibrary.map((video) => {
    return (
      <div>
        <tr>
          <th>Video ID</th>  
          <th>Title</th>
          <th>Overview</th>
          <th>Release Date</th>
          <th>Select</th>
        </tr>
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
      </div>
    )
  });

  return (
    <div>
      <h2>Video Library</h2>
      {errorMessage ? <div><p className="validation-errors-display">{errorMessage}</p></div> : ''}
      {props.selectedVideo? < SelectedVideo selectedVideo={props.selectedVideo}/> : ''}

        <table>
          <tbody>
            {renderTableData}
          </tbody>
        </table>
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

