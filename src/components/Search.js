import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Search.css';
import SearchBar from './SearchBar';

const baseURL = 'http://localhost:3000'

const Search = (props) => {

  const [searchResult, setSearchResult] = useState([]);
  const [videoList, setVideoList] = useState([]);
  
  const videoApi = (searchTitle) => {

    axios.get(baseURL, {
      params: {
        query: searchTitle
      }
    })
      .then((response) => {
        setSearchResult(response.data);

      })
      .catch(() => {
        alert('Failed to search video');
      });
  };

  const addVideoLibrary = (video) => {
    axios({
      method: 'post',
      url: `${baseURL}/videos`,
      body: video
    })
      .then((response) => {
        const updateVideoList = videoList;
        updateVideoList.push(video);
        setVideoList(updateVideoList);
        alert('Video added to the library');
      })
      .catch(error => {
        console.log(error)
        alert('This video cannot be added to the library');
      });
  };

  return (
    <main>
    <div>
      <table className='videos-table'>
       
      <SearchBar addSearchCallback={videoApi} />

      {searchResult.map((video) => (
        <div>
           <tr>
          <td className='.videos-table-title'>{video.title}</td>
        <td className='videos-table-select'><button key={video.external_id} onClick={() => addVideoLibrary(video)}>Add to Library</button></td>
        </tr>
        </div>
      ))
      }
      </table>
    </div>
    </main>
  )
  
}

Search.propTypes = {
  addVideoCallback: PropTypes.func.isRequired,
};

export default Search;