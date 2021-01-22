import React, { Component, useState } from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap'

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
  
    return (

      <div className="App">
      <Router> 

        <Navbar bg="dark">
          <Nav>
          <Nav.Link>
            <Link to="/" exact={true}>Video Store</Link>
          </Nav.Link>
          <Nav.Link>
              <Link to="/search" exact={true}>Search</Link>
          </Nav.Link>
          <Nav.Link>
              <Link to="/customers" exact={true}>Customers</Link>
          </Nav.Link>
          <Nav.Link>
              <Link to="/library" exact={true}>Video Library</Link>
          </Nav.Link>
          </Nav>
        </Navbar>
      
      <SelectedVideo video={selectedVideo}/>
      <SelectedCustomer customer={selectedCustomer}/>

        {/* <VideoLibrary/> */}
        {/* <SelectedVideo video={selectedVideo}/> */}
        
        
        <Switch>
          <Route exact={true} path="/">
            <p>Homepage!</p>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/customers">
            <CustomerList onSelectCustomer={handleCustomerChange} selectedCustomer={selectedCustomer}/>
          </Route>
          <Route exact  path="/library">
            <VideoLibrary addRental={addRental} selectedCustomer={selectedCustomer}  onSelectVideo={handleVideoChange} selectedVideo={selectedVideo}/>
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
