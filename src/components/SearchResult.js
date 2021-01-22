import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const SearchResult = (props) => {

  const { video } = props

  const addVideo = () => {
  // How to handle of a video already eists (frontend or backend)?
  // Conditional? if (video === A video in the library) {
    //return an error message 
  // } else trigger post request.

  axios.post(`${props.baseUrl}/videos`, video)
    .then((response) => {
      console.log(response)
      document.getElementById('button').className = 'btn btn-secondary disabled'; 
    })
    .catch((error) => {
      console.log(error.message)
    });
  }

  return (
    <tr class="table-active">
      <th scope="row"><img src={video.image_url} className="" alt="poster" /></th>
      <th scope="row">{video.title}</th>
      <th scope="row">{video.overview}</th>
      <td>{video.release_date}</td>
      <td><button onClick={addVideo} className="btn btn-primary" id='button'>Add!</button></td>
    </tr>
  )
}
  
SearchResult.propTypes = {
  baseUrl: PropTypes.string.isRequired
  };
  

export default SearchResult;    