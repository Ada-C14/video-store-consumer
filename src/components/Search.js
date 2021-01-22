import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Search.css';
import SearchBar from './SearchBar';

const baseURL = 'http://localhost:3000'

const Search = (props) => {

  const [searchResult, setSearchResult] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSucessMessage] = useState(null);

  const videoApi = (searchTitle) => {
    axios.get(baseURL, {
      params: {
        query: searchTitle
      }
    })
      .then((response) => {
        setSearchResult(response.data);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const addVideoLibrary = (video) => {
    console.log(video)
    axios({
      method: 'post',
      url: `${baseURL}/videos`,
      params: video
    })
      .then((response) => {
        const updateVideoList = videoList;
        updateVideoList.push(video);
        setVideoList(updateVideoList);
        setSucessMessage('Video successfull added to the library');
      })
      .catch(error => {
        console.log(error)
        setErrorMessage('This video is already added to the library');
      });
  };

  return (
    <div>
      { successMessage ?
        <div>
          <h2 className="validation-errors-display">{successMessage}</h2>
        </div> : ''}
      { errorMessage ?
        <div>
          <h2 className="validation-errors-display">{errorMessage}</h2>
        </div> : ''}
      <SearchBar addSearchCallback={videoApi} />
      <h2>Add Videos to Library</h2>
      <table className='videos-table'>
        {searchResult.map((video) => (
          <React.Fragment key={video.ext}>
            <tr></tr>
            <td className='.videos-table-title'>{video.title}</td>
            <td className='videos-table-select'><button onClick={() => addVideoLibrary(video)}>Add to Library</button></td>
          </React.Fragment>
        ))
        }
      </table>
    </div>
  )

}

Search.propTypes = {
  addVideoCallback: PropTypes.func.isRequired,
};

export default Search;