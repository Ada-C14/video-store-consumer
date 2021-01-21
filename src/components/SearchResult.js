import React from 'react';
import NewVideoForm from './NewVideoForm';

import './Video.css';

const SearchResult = (props) => {

  return (
    <div 
      className={`container ${props.selectedVideo && props.id === props.selectedVideo.id ? 'selected' : ''}`} 
    >
      <section className='video-image'>
        <img src={props.result.image_url} alt={`${props.result.title} movie cover`}/>
      </section>
      <section className='video-description'>
        <h2>{props.result.title}</h2>
        <h3>{props.result.release_date}</h3>
        <p>{props.result.overview}</p>
      </section>
      <NewVideoForm 
        video={props.result} 
        addVideoCallback={props.addVideoCallback}
        videos={props.videos}/>
    </div>
  )
}

export default SearchResult;