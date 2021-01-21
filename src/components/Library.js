import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Library.css';

const Library = (props) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(response => {
        setVideoList(response.data);
      })
      .catch(() => {
        alert('Failed to select videos');
      });
  }, []);

  return (
    <div className="video-container">
      {videoList.map((video) => (
        <React.Fragment key={video.id}>
          <button
            onClick={() => props.onSelectVideoCallback(video)}>Select</button>
          <div>{video.name}</div>
        </React.Fragment>
      ))
      }
    </div>
  )
}

Library.propTypes = {
  onSelectVideoCallback: PropTypes.func.isRequired,
}
export default Library;