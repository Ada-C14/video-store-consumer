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
import './App.css';
import CheckOut from './components/CheckOut';
import CheckIn from './components/CheckIn';
import { Navbar, Nav, NavLink,Form, FormControl, Button, Image } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'



// base url depents on the link of rails server
const BASE_URL = 'http://localhost:3000/'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null);

  const chooseVideo = (videoData) => {
    setSelectedVideo(videoData)
  }

  const chooseCustomer = (id) => {
    setSelectedCustomer(id.id)
  }

  const checkOut = (rental) => {
    console.log(rental.dueDate)
    axios.post(`${BASE_URL}rentals/${rental.video.title}/check-out?customer_id=${rental.customer}&due_date=${rental.dueDate}`, rental)
    .then((response) => {
      setErrorMessage('');
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });

    setSelectedVideo(null)
    setSelectedCustomer(null)
  }

  const checkIn = (rental) => {
    axios.post(`${BASE_URL}rentals/${rental.video.title}/return?customer_id=${rental.customer}&returned=true`, rental)
    .then((response) => {
      setErrorMessage('Return completed!');
    })
    .catch((error) => {
      // setErrorMessage(error.message);
      setErrorMessage('Unable to find checkout!');
    });

    setSelectedVideo(null)
    setSelectedCustomer(null)
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={vhs} className="App-logo" alt="logo" />

          <h1 className="App-title">Ting-Yi and Anya's Movie Shop!</h1>
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
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
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
        </Navbar>

        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          // <li>
          //   <Link to="/search">Video Search</Link>
          // </li>
          <li>
            <Link to="/library">Video Library</Link>
          </li>
          <li>
            <Link to="/customers">Customer List</Link>
          </li>
        </ul> */}

        {/* <div>
          <CheckOut video={selectedVideo}
                    customer={selectedCustomer}
                    checkOutCallback={checkOut} />
        </div> */}
        {/* <div>
          <CheckIn video={selectedVideo}
                    customer={selectedCustomer}
                    checkInCallback={checkIn} />
        </div> */}

        <div>
          <p>{errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}</p>
          <p>{ selectedVideo ? `Selected video: ${selectedVideo.title }` : 'Video not selected'}</p>
          <p>{ selectedCustomer ? `Selected customer ID: ${selectedCustomer}` : 'Customer not selected'}</p>
        </div>

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
    <img src={popcorn} alt="logo" />)

}