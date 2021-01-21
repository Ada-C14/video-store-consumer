import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = props => {
  const [showMsg, setShowMsg] = useState(false);

  return (
    <div className='movie-card' onMouseEnter={() => setShowMsg(true)} onMouseLeave={() => setShowMsg(false)} >
      { showMsg && (<div className='click-alert'>Click for more info</div>) }
      <img 
        src={props.imageURL} 
        alt={props.title} 
        onClick={() => props.handleClickCallback(props)} 
      />
      <h5>{props.title}</h5>
      { props.location === 'search' 
        ? <button onClick={() => props.addMovieClickback(props)}>Add to Library</button>
        : <button onClick={() => props.addMovieRentalCallback(props)}>Select Rental</button>
      }
    </div>
  );
};

Movie.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleClickCallback: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  addMovieClickback: PropTypes.func,
  addMovieRentalCallback: PropTypes.func
};

export default Movie;