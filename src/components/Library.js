import React from 'react';
import Movie from './Movie';
import './Library.css';
import PropTypes from 'prop-types';

const Library = ({movieList, onSelectedMovie}) => {

  const movieComponents = movieList.map((movie) => {
    return (
      <Movie 
        id={movie.id}
        title={movie.title}
        imageUrl={movie.image_url}
        key={movie.id}
        onSelectedMovie={onSelectedMovie}
      />
    )
  });

  return (
    <div>
      <h2 className='page-title'>Movie Library</h2>
      <div className='library'>
        {movieComponents}
      </div>
    </div>
  )
}

Library.propTypes = {
  movieList: PropTypes.array.isRequired,
  onSelectedMovie: PropTypes.func.isRequired,
};

export default Library;