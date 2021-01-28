import React from 'react';
import '../index.css';
import 'materialize-css/dist/css/materialize.min.css';
import Moment from 'moment';

const Video = ({ video }) => {
  const { title, release_date: releaseDate, image_url: imageUrl } = video;

  const date = Moment(releaseDate).format('MMM, DD, YYYY');

  return (
    <div className="main card rounded">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={imageUrl} />
        <div className="movieTitle">{title}</div>
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4"></span>
        <p className="date-text">{date}</p>
      </div>
    </div>
    // </div>
  );
};

export default Video;
