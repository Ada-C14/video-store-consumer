import React, { Component, useState } from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Button} from 'react-bootstrap'

import CustomerList from './components/CustomerList';
import VideoLibrary from './components/VideoLibrary';
import SelectedVideo from './components/SelectedVideo';
import Search from './components/Search'
import SelectedCustomer from './components/SelectedCustomer';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Detail from './components/Detail';

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')


  const handleVideoChange = ((selectedData) => {
      setSelectedVideo(selectedData.value)
  })

  const handleCustomerChange = ((selectedData) => {
      setSelectedCustomer(selectedData.value)
  })

  const resetState = () => {
    setSelectedVideo(null);
    setSelectedCustomer(null);
  };

  const addRental = () => {
    axios
      .post(`http://localhost:3000/rentals/${selectedVideo.title}/check-out`, {
        customer_id: selectedCustomer.id,
        due_date: new Date(
          Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 7
        ),
      })

      .then((res) => {
      window.location = '/detail'
        //resetState();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const HomePageGrid = () // working on this now SM
  
    return (

      <div className="App">
      <Router> 

        <Navbar bg="dark" className="navbar">
          <Nav>
          <Nav.Link>
            <Link to="/" exact={true} className="navbar-logo">Video Store</Link>
          </Nav.Link>
          <Nav.Link className="navbar-wrapper">
              <Link to="/search" exact={true} className="navbar-link">Search</Link>
          </Nav.Link>
          <Nav.Link className="navbar-wrapper">
              <Link to="/customers" exact={true} className="navbar-link">Customers</Link>
          </Nav.Link>
          <Nav.Link className="navbar-wrapper">
              <Link to="/library" exact={true} className="navbar-link">Video Library</Link>
          </Nav.Link>

          <Nav.Link className="navbar-wrapper justify-content-end">
            <Link to="/library" className="selected navbar-link">Selected Video: <strong>{selectedVideo &&(selectedVideo.title)} </strong></Link>
          </Nav.Link>

          <Nav.Link className="navbar-wrapper justify-content-end">
            <Link to="/customers" className="selected navbar-link">Customer: <strong>{selectedCustomer &&(selectedCustomer.name)} </strong></Link>
          </Nav.Link>

          <Nav.Link className="navbar-button">
          {selectedVideo && selectedCustomer ? 
            <Button className="customer-button" onClick={() => addRental()}>
                Checkout
            </Button> : ''}
          </Nav.Link>

          </Nav>
        </Navbar>
      
        
        <Switch>
          <Route exact={true} path="/">
            <p>Homepage!</p>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/customers">
            <CustomerList onSelectCustomer={handleCustomerChange} selectedCustomer={selectedCustomer}/>
            <SelectedCustomer customer={selectedCustomer}/>
          </Route>
          <Route exact  path="/library">
            <VideoLibrary addRental={addRental} selectedCustomer={selectedCustomer}  onSelectVideo={handleVideoChange} selectedVideo={selectedVideo}/>
            <SelectedVideo video={selectedVideo}/>
          </Route>

          <Route exact  path="/detail">
            <Detail />
          </Route>
        </Switch>


      </Router>
    </div>
  );

}

export default App;
