import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Library.css';

const baseURL = 'http://localhost:3000'

const Library = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        setVideoList(response.data);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div>
      { errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
      <h2> Videos List</h2>
      <table className="videos-table">
        {videoList.map((video) => (
          <React.Fragment key={video.id}>
            <tr></tr>
            <td className='videos-table-title'>{video.title}</td>
            <td className='videos-table-date'>{video.release_date}</td>
            <td className='videos-table-select'><button onClick={() => props.onSelectVideoCallback(video)}>Select</button></td>
          </React.Fragment>
        ))
        }
      </table>
    </div>
  )
}

Library.propTypes = {
  onSelectVideoCallback: PropTypes.func.isRequired,
  videoList: PropTypes.array.isRequired
}
export default Library;