import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieSearchBar from './MovieSearchBar.js';
import './Homepage.css';

const Homepage = (props) => {
  const movie = props.movie;
  const customer = props.customer;

  return (
    <div className='homepage-container'>
      <div className={ movie || customer ? 'homepage-rental' : 'homepage'}>
        { movie || customer 
          ? <div>
            <h1>rental in-progress</h1>
            <div className='rentalInfoContainer'>
              { movie 
                ? <div className='movie-rental rental-info'>
                  <div className='rental-text'>Selected movie:</div>
                  <h4 className='rental-text-main'>{movie.title}</h4>
                  <div className='img-container'><img src={movie.imageURL} alt={movie.title} /></div>
                </div>
                : <div className='missingRentalInfo-container movie-rental rental-info'>
                    <div className='rental-text-main'>Please select a movie to complete this transaction.</div>
                    <div className='missingRentalInfo'>
                      <div className='main-btn'><Link to='/library'>movies</Link></div>
                    </div>
                  </div>
              }
              { customer 
                ? <div className='customer-rental rental-info'>
                  <div className='rental-text'>Selected customer:</div>
                  <h4 className='rental-text-main'>{customer.name}</h4>
                  <img className='customer-img' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsuxUrEVyvCmLYoM5BeyNUOts2akw1RFDYw&usqp=CAU'} alt={'customer icon'} />
                </div>
                : <div className='missingRentalInfo-container customer-rental rental-info'>
                    <div className='rental-text-main'>Please select a customer to complete this transaction.</div>
                    <div className='missingRentalInfo'>
                      <div className='main-btn'><Link to='/customers'>customers</Link></div>
                    </div>
                  </div>
              }
            </div>
          </div>
          : [<h1>start a rental</h1>,
            <div className='btn-container'>
              <div className='main-btn'><Link to='/library'>movies</Link></div>
              <div className='main-btn'><Link to='/customers'>customers</Link></div>
            </div>,
            <br />]
        }
        <h1>search for a movie</h1>
        <MovieSearchBar url={props.url} />
      </div>
      <div className='img-carousel'></div>
    </div>
  );
};

Homepage.propTypes = {
  url: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
};

export default Homepage;