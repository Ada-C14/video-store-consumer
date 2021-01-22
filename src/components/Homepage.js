import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieSearchBar from './MovieSearchBar.js';
import Navbar from './Navbar.js';
import './Homepage.css';

const Homepage = (props) => {
  const customer = props.customer;
  const movie = props.movie;

  const homepageImages = [
    'cmbyn1',
    'pulp-fiction',
    'titanic',
    'cmbyn2',
    'hp'
  ];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const s = setInterval(() => {
      let newCounter = counter;
      if (counter === homepageImages.length - 1) {
        setCounter(0);
      } else {
        setCounter(newCounter + 1);
      }
    }, 3000);

    return () => clearInterval(s);
  }, [counter]);

  return (
    <div>
      {/* <Navbar home={movie && customer ? false : true}/> */}
      <div className='homepage-container'>
        <div className={ movie || customer ? 'homepage-rental' : 'homepage'}>
          <Navbar home={true}/>
          {/* <h1>{ props.rentedMessage ? props.rentedMessage : '' }</h1> */}
          { movie || customer 
            ? <div>
              { movie && customer 
                ? <div className='checkout'>
                  <h1>rental ready!</h1>
                  <button onClick={() => props.rentMovieCallback()}>checkout</button>
                </div>
                : <h1>rental in-progress</h1>
              }
              <div className='rentalInfoContainer'>
                { movie 
                  ? <div className='movie-rental rental-info'>
                    <div className='top-info'>
                      <div className='top-info-txt'>
                        <div className='rental-text'>Selected movie:</div>
                        <h4 className='rental-text-main'>{movie.title}</h4>
                      </div>  
                      <button onClick={() => props.setMovieCallback(null)}>Undo</button>
                    </div>
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
                      <div className='top-info'>
                        <div className='top-info-txt'>
                          <div className='rental-text'>Selected customer:</div>
                          <h4 className='rental-text-main'>{customer.name}</h4>
                        </div>
                        <button onClick={() => props.setCustomerCallback(null)}>Undo</button>
                      </div>
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
            : <div className='starter-homepage'>
                <h1>start a rental</h1>
                <div className='btn-container'>
                  <div className='main-btn'><Link to='/library'>movies</Link></div>
                  <div className='main-btn'><Link to='/customers'>customers</Link></div>
                </div>
              </div>
          }
          <br />
          <h1>search for a movie</h1>
          <MovieSearchBar 
            url={props.url} 
            customer={props.customer ? customer.name : ''} 
            movie={props.movie ? movie.title : ''} 
          />
        </div>
        <div className={`img-carousel ${homepageImages[counter]}`}></div>
      </div>
    </div>
  );
};

Homepage.propTypes = {
  url: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  setCustomerCallback: PropTypes.func.isRequired,
  setMovieCallback: PropTypes.func.isRequired,
  rentMovieCallback: PropTypes.func.isRequired,
  rentedMessage: PropTypes.string.isRequired,
  checkoutCallback: PropTypes.func,
  rentedMsgCallback: PropTypes.func
};

export default Homepage;