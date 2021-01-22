import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';
import vhs from './VHS.jpg';
import popcorn from './popcorn.png';
import cow from './cow.png';
import './App.css';
import CheckOut from './components/CheckOut';
import CheckIn from './components/CheckIn';
import { Navbar, Nav, NavLink,Form, FormControl, Button, Image, Table } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'



// base url depents on the link of rails server
const BASE_URL = 'http://localhost:3000/'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const chooseVideo = (videoData) => {
    setSelectedVideo(videoData);
    setErrorMessage(null);
  }

  const chooseCustomer = (id) => {
    setSelectedCustomer(id.id);
    setErrorMessage(null);
  }

  const checkOut = (rental) => {
    // console.log(rental.dueDate)
    if (rental.video.availableInventory > 0) {
      axios.post(`${BASE_URL}rentals/${rental.video.title}/check-out?customer_id=${rental.customer}&due_date=${rental.dueDate}`, rental)
      .then((response) => {
        setErrorMessage(`Successufully checked out ${rental.video.title}`);
      })
      .catch((error) => {
        // setErrorMessage(error.message);
        setErrorMessage(`Checkout unsuccessful`);
      });
      setSelectedVideo(null)
      setSelectedCustomer(null)
    }

    setSelectedVideo(null)
  }

  const checkIn = (rental) => {
    axios.post(`${BASE_URL}rentals/${rental.video.title}/return?customer_id=${rental.customer}&returned=true`, rental)
    .then((response) => {
      setErrorMessage('Return completed!');
    })
    .catch((error) => {
      // setErrorMessage(error.message);
      setErrorMessage(`Return unsuccessful: this customer didn't rent ${rental.video.title}`);
    });

    setSelectedVideo(null)
    setSelectedCustomer(null)
  }

  const deselectedVideoSubmit = () => {
    setSelectedVideo(null)
  }
  const deselectedCustomerSubmit = () => {
    setSelectedCustomer(null)
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={vhs} className="App-logo" alt="logo" />

          <h1 className="App-title">🐮 The Moo-vie Shop! 🐮</h1>
        </header>

        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/library'>
              <Nav.Link>Videos</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/customers'>
              <Nav.Link>Customers</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/search'>
              <Nav.Link>Search</Nav.Link>
            </LinkContainer>
            
          </Nav>

          <div class='btn'>
            <CheckOut video={selectedVideo}
                        customer={selectedCustomer}
                        checkOutCallback={checkOut} />
          </div>
          <div class='btn'>
            <CheckIn video={selectedVideo}
                      customer={selectedCustomer}
                      checkInCallback={checkIn} />
          </div>
{/* 
          <div className='selection-statements'>
            <div className={selectedVideo ? 'selection' : 'no-selection'}>
              <p>{ selectedVideo ? `Video: ${selectedVideo.title }` : 'Video not selected'}</p>
              {selectedVideo ? <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={deselectedVideoSubmit}>
                  Deselected Video
                </button> : ''}
            </div>
            <div className={selectedCustomer ? 'selection' : 'no-selection'}>
              <p>{ selectedCustomer ? `Customer ID: ${selectedCustomer}` : 'Customer not selected'}</p>
              {selectedCustomer ? <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={deselectedCustomerSubmit}>
                  Deselected Customer
                </button> : ''}
            </div>
          </div> */}


        </Navbar>
        <div className="text-lg-center">
          <h4 className={errorMessage ? (errorMessage.includes('completed') ? 'text-success border border-success' : 'text-danger border border-danger') : ''}>       
            {errorMessage ? `${errorMessage}` : ''}
          </h4>
        </div>

        <table className="float-right text-left mt-4">
            <tbody>
              <tr>
                  <td className={selectedVideo ? 'selection' : 'no-selection'}>
                    <p>{ selectedVideo ? `Video: ${selectedVideo.title }` : 'Video not selected'}</p>
                  </td>
                  <td className="text-right">
                    {selectedVideo ? <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={deselectedVideoSubmit}>
                      Deselect Video
                      </button> : <button
                      className="btn btn-outline-primary btn-sm disabled">
                      Select a Video </button>}
                  </td>
                  <td className="visually-hidden">Video</td>
              </tr>
              <tr>
                  <td className={selectedCustomer ? 'selection' : 'no-selection'}>
                    <p>{ selectedCustomer ? `Customer ID: ${selectedCustomer}` : 'Customer not selected'}</p>
                  </td>
                  <td className="text-right">
                    {selectedCustomer ? <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={deselectedCustomerSubmit}>
                    Deselect Customer
                    </button> : <button
                    className="btn btn-outline-primary btn-sm disabled">
                    Select a Customer </button> }
                  </td>
              </tr>      
            </tbody>
          </table>

        <Switch>
          <Route path="/search" component={Search}>
            <Search url={BASE_URL}
                    focus='videos'/>
          </Route>
          <Route path="/library" component={Library}>
            <Library url={BASE_URL}
                       focus='videos/'
                       selectVideoCallback={chooseVideo}
                       selectedVideo={selectedVideo}/>
          </Route>
          <Route path="/customers" component={Customers}>
            <Customers url={BASE_URL}
                       focus='customers'
                       selectCustomerCallback={chooseCustomer}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


function Home() {
  return (
    <div>
      <img src={popcorn} alt="movie snacks" />
      <img src={cow} alt="cow" className='cow'/>
    </div>
    )

}