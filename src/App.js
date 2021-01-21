import React, { useState, useEffect } from 'react'
import CustomerList from './components/CustomerList.js';
import MovieLibrary from './components/MovieLibrary.js';
import MovieSearchBar from './components/MovieSearchBar.js';
import MovieSearchResults from './components/MovieSearchResults.js';
import Rental from './components/Rental.js';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const BASE_API_URL = 'http://localhost:3000';

export default function App() {
  const [customer, setCustomer] = useState(null);
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState(null);

  const selectCustomer = (customer) => {
    setCustomer(customer);
  };

  const selectMovie = (movie) => {
    setMovie(movie);
  };

  const dueDate = () => {
    const result = new Date();
    result.setDate(result.getDate() + 14);
    return result;
  }

  const rentMovie = () => {
    const url = BASE_API_URL + '/rentals/' + movie.title + '/checkout?customer_id=' + customer.id + 'due_date=' + dueDate;

    axios.post(url)
      .then(() => {
        setMessage('Movie Rented!');
        console.log('worked!')
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }

  return (
    <Router>
      <div>
        <div className='top-nav'>
          <h2><Link to="/">video store</Link></h2>
          <nav className='main-fns'>
            <ul>
              <li>
                <Link to="/library">movie library <i class="arrow down"></i></Link>
              </li>
              <li>
                <Link to="/customers">customer list <i class="arrow down"></i></Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <MovieLibrary selectMovieCallback={selectMovie} url={BASE_API_URL} />
          </Route>
          <Route path="/customers">
            <CustomerList selectCustomerCallback={selectCustomer} url={BASE_API_URL} />
          </Route>
          <Route path='/results' render={props => <MovieSearchResults {...props} />}/>
          <Route path="/">
            { Home(movie, customer) }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = (movie, customer) => {
  return (
    <div className='homepage-container'>
      <div className={ movie || customer ? 'homepage-rental' : 'homepage'}>
        { movie || customer 
          ? <div>
            <h1>rental in-progress</h1>
            <div className='rentalInfoContainer'>
              { movie 
                ? <div className='movie-rental'>
                  <img src={movie.imageURL} alt={movie.title} />   
                </div>
                : <div className='missingRentalInfo'></div>
              }
              { customer 
                ? <div className='customer-rental'>
                  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsuxUrEVyvCmLYoM5BeyNUOts2akw1RFDYw&usqp=CAU'} alt={'customer icon'} />   
                </div>
                : <div className='missingRentalInfo'></div>
              }
            </div>
          </div>
          : [<h1>start a rental</h1>,
            <div className='btn-container'>
              <div className='main-btn'><Link to='/library'>movies</Link></div>
              <div className='main-btn'><Link to='/customers'>customers</Link></div>
            </div>]
        }
        <br />
        <h1>search for a movie</h1>
        <MovieSearchBar url={BASE_API_URL} />
      </div>
      <div className='img-carousel'></div>
    </div>
  );
};
