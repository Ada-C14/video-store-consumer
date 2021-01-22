import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Video from './Video';

const Videos = (props) => {
  
  const [videoList, setVideosList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {
    axios.get(`${props.baseUrl}/videos`)
      .then((response) => {
        const railsVideoList = response.data;
        setVideosList(railsVideoList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [`${props.baseUrl}/videos`]);

  const generateVideos = (videos) => {
    let videoComponentArray = [];
  for (const video of videos)
  {
    videoComponentArray.push(
      <Video
          key={video.id}
          video={video}
          selectedVideoCallback={props.selectedVideoCallback}
      />
    )
  }
    return videoComponentArray;
  };

  return (
    <div>
      <h1><em>Video List</em></h1>
      <section className="container w-75">
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">Poster</th>
              <th scope="col">Title</th>
              <th scope="col">Overview</th>
              <th scope="col">Release Date</th>
              <th scope="col">Select For Rental?</th>
            </tr>
          </thead>
          <tbody>
              {generateVideos(videoList)}
          </tbody>
        </table>
      </section>
    </div>
  );
}

Videos.propTypes = {
  selectedVideoCallback: PropTypes.func.isRequired , 
  baseUrl: PropTypes.string.isRequired ,
};
  

export default Videos;
