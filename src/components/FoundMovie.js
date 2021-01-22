import React from 'react';
import './Movie.css';
import './Movie.css';

const FoundMovie = (props) => {
  return (
    <div className='movie'>
      <div className='movie_content'>
        <h4 className='movie_content-text'>{props.title}</h4>
        <img src={props.image_url} alt='Movie poster'/>
        <button onClick={() => props.addMovie(props.external_id)} className='add_movie'>Add to Library</button>
      </div>
    </div>
  )
}

export default FoundMovie;