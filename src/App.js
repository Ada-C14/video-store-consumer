import React, { useState } from 'react'
import CustomerList from './components/CustomerList.js';
import MovieLibrary from './components/MovieLibrary.js';
import MovieSearchResults from './components/MovieSearchResults.js';
import Homepage from './components/Homepage.js';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
    const url = BASE_API_URL + '/rentals/' + movie.title + '/check-out?customer_id=' + customer.id + '&due_date=' + dueDate();

    axios.post(url)
      .then((response) => {
        // setMessage('Movie Rented!');
        // setTimeout(() => setMessage(''), 5000);
        setTimeout(function(){ alert('Movie rented!') }, 3000);
        setMovie(null);
        setCustomer(null);
      })
      .catch((error) => {
        // setMessage(error.message);
        setTimeout(function(){ alert(error.message) }, 3000);
      });
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/library">
            <MovieLibrary 
              selectMovieCallback={selectMovie} 
              url={BASE_API_URL} 
              customer={customer ? customer.name : ''} 
              movie={movie ? movie.title : ''}
              checkoutCallback={rentMovie}
            />
          </Route>
          <Route path="/customers">
            <CustomerList 
              selectCustomerCallback={selectCustomer} 
              url={BASE_API_URL} 
              customer={customer ? customer.name : ''} 
              movie={movie ? movie.title : ''}
              checkoutCallback={rentMovie}
            />
          </Route>
          <Route path='/results' render={props => <MovieSearchResults {...props} />}/>
          <Route path="/">
            <Homepage 
              movie={movie} 
              customer={customer} 
              url={BASE_API_URL} 
              setMovieCallback={setMovie}
              setCustomerCallback={setCustomer}
              rentMovieCallback={rentMovie}
              rentedMessage={message}
              checkoutCallback={rentMovie}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
