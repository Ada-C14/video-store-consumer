import React from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

const Popup = props => {
  const movie = props.clickedMovieInfo;

  return (
    <div className='popup'>
      <img src={movie.imageURL} alt={movie.title} />
      <div className='popup-movie-info'>
        <div className='popup-movie-info__exit-button'>
          <button onClick={props.exitCallbackFn} className='exit-button'>X</button>
        </div>
        <h4>{movie.title}</h4>
        <p>Released: {movie.releaseDate}</p>
        <p>Summary: {movie.overview}</p>
        { props.location === 'search' 
          ? <button 
              onClick={() => { 
                props.addMovieClickback(props.clickedMovieInfo); props.exitCallbackFn(); 
              }}>
              Add to Library
            </button>
          : <button 
              onClick={() => { 
                props.addMovieRentalCallback(props.clickedMovieInfo); props.exitCallbackFn(); 
              }}>
              Select Rental
            </button>
        }
      </div>
    </div>
  );
};

Popup.propTypes = {
  clickedMovieInfo: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  exitCallbackFn: PropTypes.func.isRequired,
  location: PropTypes.string,
  addMovieClickback: PropTypes.func,
  addMovieRentalCallback: PropTypes.func
};

export default Popup;