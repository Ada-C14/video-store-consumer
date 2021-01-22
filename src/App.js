import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home'
import Search from './components/Search'
import Library from './components/Library'
import Customers from './components/Customers'
import Rental from './components/Rental'

export default function App() {
  const URL = 'http://localhost:3000/'

  const [movieList, setMovieList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentMovie, setCurrentMovie] = useState('');
  const [customerList, setCustomerList] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [successfulRental, setSuccessfulRental] = useState(false);

  useEffect(() => {
    axios.get(`${URL}videos`)
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  useEffect(() => {
    axios.get(`${URL}customers`)
      .then((response) => {
        setCustomerList(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const selectedMovie = (id) => {
    const movie = movieList.find((movie) => {
      return movie.id === id;
    });
    setCurrentMovie(movie);
    setSuccessfulRental(false)
  } 

  const selectedCustomer = (customerId) => {
    const customer = customerList.find((customer) => {
      return customer.id === customerId;
    });
    setCurrentCustomer(customer);
    setSuccessfulRental(false)
  }

  const addToLibrary = (externalId) => {
    const movieToAdd = searchResults.find((movie) => {
      return movie.external_id === externalId
    })

    movieToAdd['inventory'] = 10

    const checkLibraryData = movieList.find((movie) => {
      return movie.external_id === externalId
    });

    if (checkLibraryData) {
      setErrorMessage('Already exists in the Library')
    } else {
      axios.post(`${URL}videos`, movieToAdd)
      .then((response) => {
        const updatedMovieList = [...movieList, response.data]
        setMovieList(updatedMovieList);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
   }
  }

  const onSearch = (term) => {
    axios.get(`${URL}videos/?query=${term}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message)
      }); 
  };

  const onCreateRental = () => {
    if (currentCustomer !== '' && currentMovie !== '') {
      const rentalParams = {}
      rentalParams['customer_id'] = currentCustomer.id
      rentalParams['due_date'] = createDueDate()
      console.log(rentalParams)

      axios.post(`${URL}rentals/${currentMovie.title}/check-out`, rentalParams)
      .then((response) => {
        console.log(response.data)
        setSuccessfulRental(true)
      })
      .catch((error) => {
        console.log(error.message)
        setErrorMessage(error.message);
      });
    }
  };

  const createDueDate = () => {
    const today = new Date()
    const dueDate = new Date(today.setDate(today.getDate() + 14)).toISOString().split('T')[0]
    return dueDate
  }

  const rental = <Rental 
    movie={currentMovie} 
    customer={currentCustomer} 
    successfulRental={successfulRental} 
    rentalCallback={onCreateRental}
    />

  const displaySelection = (currentCustomer !== '' || currentMovie !== '') ? rental : ''

  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand' to="/">Leema Bean's Video Store</Link>
          <ul className='nav'>
            <li className='nav-item'>
              <Link className='nav-link' to="/search">Search</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/library">Library</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            {displaySelection}
            <section className='page'>
              <Search search={onSearch} results={searchResults}addMovie={addToLibrary}/>
            </section>
          </Route>
          <Route path="/library">
            {displaySelection}
            <section className='page'>
              <Library movieList={movieList} onSelectedMovie={selectedMovie} />
            </section>
          </Route>
          <Route path="/customers">
            {displaySelection}
            <section className='page'>
              <Customers customerList={customerList} onSelectedCustomer={selectedCustomer} />
            </section>
          </Route>
          <Route path="/">
            {displaySelection}
            <section className='page'>
              <Home />
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

