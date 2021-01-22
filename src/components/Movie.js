import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


const Movie = ({id, title, imageUrl, onSelectedMovie}) => {
  return (
    <div onClick={() => {onSelectedMovie(id)}} className='movie movie-hover'>
      <div className='movie_content'>
        <h4 className='movie_content-text'>{title}</h4>
        <img  src={imageUrl} alt='Movie poster'/>
      </div> 
   </div>
  )
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onSelectedMovie: PropTypes.func.isRequired,
}

export default Movie;