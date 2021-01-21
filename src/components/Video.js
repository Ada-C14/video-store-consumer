import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Video.css'

const Video = (props) => {
  const [status, setStatus] = useState('');


  // const onInventoryChange = (event) => {
  //   setInventory(event.target.value);
  // };

  const onAddVideo = (event) => {
    setStatus(null);
    event.preventDefault();
    props.onAddLibraryCallback(props.external_id); 
    setStatus('Added video');
  };

  return (
      <ul className="video-row">
        <div class="movie-text">
          <li><h1>{props.video.title}</h1></li>
          <li>{props.video.overview}</li>
          <li>{props.video.release_date}</li>
          {/* <li>
            <form onSubmit={onAddVideo}>
            <div>
              <label htmlFor="inventory">Inventory:</label>
              <input name="inventory" onChange={onInventoryChange} value={inventory}/>
            </div>
            </form>
      </li> */}
          <li><button onClick={onAddVideo}>Add to Library</button></li>
          { status ? <div><h2 className="video-status">{status}</h2></div> : '' }
        </div>
        <li class="movie-image"><img src={props.video.image_url} alt={`the movie ${props.video.title}`} /></li>
      </ul>
  )
}

Video.propTypes = {

};

export default Video;
