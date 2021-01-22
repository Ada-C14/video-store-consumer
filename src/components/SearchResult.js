import axios from 'axios';
// import React, { useState } from 'react';

const SearchResult = (props) => {

const { video } = props
// const [ addSuccessMessage, setAddSuccessMessage ] = useState(null)

const addVideo = () => {

  axios.post(`${props.baseUrl}/videos`, video)
    .then((response) => {
      console.log(response)

      document.getElementById('button').className = 'btn btn-secondary disabled'; 
    })
    .catch((error) => {
      // ADD STUFF HERE IF TIME
    });
}

    return (

        <tr class="table-active">
            <th scope="row"><img src={video.image_url} className="w-75" alt="poster" /></th>
            <th scope="row">{video.title}</th>
            <td>{video.release_date}</td>
            <td><button onClick={addVideo} className="btn btn-primary" id='button'>Add!</button></td>
        </tr>
    )
  }
  
  SearchResult.propTypes = {
    // DONT FORGET TO FILL ME OUT!
    // addCardCallback: PropTypes.func.isRequired
    };
    
  
  export default SearchResult;    