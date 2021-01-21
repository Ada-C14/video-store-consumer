import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from './Video';

// import logo from './logo.svg';
// import './App.css';

const Videos = (props) => {
  
  const [videoList, setVideosList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // const VIDEO_URL = 'http://localhost:3000/videos'
  
  useEffect(() => {
    axios.get(`${props.baseUrl}/videos`)
      .then((response) => {
        // console.log(response.data);
        const railsVideoList = response.data;
        // console.log(apiCustomerResponse[0].name)
        // Set the state
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
          id={video.id}
          title={video.title}
          overview={video.overview}
          releaseDate={video.release_date}
          imageUrl={video.image_url}
          externalId={video.externalId}
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
  // DONT FORGET TO FILL ME OUT!
  // addCardCallback: PropTypes.func.isRequired
  };
  

export default Videos;
