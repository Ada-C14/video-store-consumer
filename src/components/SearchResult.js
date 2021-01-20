import React from 'react';
import './Video.css';

const SearchResult = (props) => {

  const selectThisVideo = (event) => {
    event.preventDefault();
    // props.result.onSelectVideoCallback(props.result.id)
  }

  return (
    <div 
      className={`container ${props.result.id === props.result.selectedVideo ? 'selected' : ''}`} 
      onClick={selectThisVideo}
    >
      <section className='video-image'>
        <img src={props.result.image_url} alt={`${props.result.title} movie cover`}/>
      </section>
      <section className='video-description'>
        <h2>{props.result.title}</h2>
        <h3>{props.result.releaseDate}</h3>
        <p>{props.result.overview}</p>
      </section>
    </div>
  )
}

export default SearchResult;