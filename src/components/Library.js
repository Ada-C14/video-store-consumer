import React, { useState, useEffect, Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from './Video'

const Library = (props) => {
  const [videoLibrary, setVideoLibrary] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((response) => {
        const apiVideoLibrary = response.data;
        setVideoLibrary(apiVideoLibrary);
        console.log(videoLibrary)
        console.log(response.data)
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);


  const renderTableData = videoLibrary.map((video) => {
    // const {id, title, overview, releaseDate, inventory} = video
    return (
      <tr key={video.id}>
        <td>{video.title}</td>
        <td>{video.overview}</td>
        <td>{video.release_date}</td>
        {/* <td>{video.inventory}</td> */}
        {/* <td>{imageUrl}</td>
        <td>{externalId}</td> */}
      </tr>
    )
    // return (
    //   <div key={video.id}> 
    //     <Video
    //       id={video.id}
    //       title={video.title}
    //       overview={video.overview}
    //       release_date={video.release_date}
    //       image_url={video.image_url}
    //       external_id={video.external_id}
    //     />
    //   </div>
    // )
  });



  // const renderTableData = () => {}

  

  return (
    <div>
      <h1>Video Library</h1>
        <table>
          <tbody>
            {renderTableData}
          </tbody>
        </table>
    </div>
  )

}

export default Library

