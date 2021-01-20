import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = props => {
  const [showMsg, setShowMsg] = useState(false);

  // const handleClick = event => {
  //   // const popup = document.querySelector('.popup')
  //   // const closeBtn = document.querySelector('.closeBtn')
  //   // popup.style.display = 'block';
  //   // closeBtn.addEventListener('click', () => {
  //   //   popup.style.display = 'none';
  //   // })
  //   console.log(event)
  // };

  return (
    <div className='movieCard'>
      { showMsg && (<div>Click for more info</div>) }
      <img 
        src={props.imageURL} 
        alt={props.title} 
        onMouseEnter={() => setShowMsg(true)} 
        onMouseLeave={() => setShowMsg(false)}
        onClick={() => props.handleClickCallback(props)} 
      />
      <h5>{props.title}</h5>
      {/* <p>Released: {props.releaseDate}</p>
      <p>Summary: {props.overview}</p> */}
    </div>
  );
};

Movie.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleClickCallback: PropTypes.func.isRequired
};

export default Movie;