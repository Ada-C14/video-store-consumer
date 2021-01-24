import React, { Component, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Button, Container} from 'react-bootstrap'

import CustomerList from './components/Customers';
import VideoLibrary from './components/VideoLibrary';
import SelectedVideo from './components/SelectedVideo';
import Search from './components/Search'
import SelectedCustomer from './components/SelectedCustomer';
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Detail from './components/Detail';


const App = (props) => {

  toast.configure();

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
        )
      })

      .then((res) => {
    
        toast.success(`${selectedCustomer.name} has successfully checked out ${selectedVideo.title}`);
        resetState()
        setTimeout(function(){  window.location = '/'}, 5000)
  
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };


  //// this is an experiment ////

  const allVideosURL = 'http://localhost:3000/videos'

  const [videos, setVideos] = useState([])
  
  useEffect(() => {
      axios.get(allVideosURL)
      .then((response) => {
          const RailsApiVideoList = response.data
          setVideos(RailsApiVideoList);
      })
      .catch((error) => {
          console.log(error.message);
      });
  }, []);

  function VideoGrid() {  
    const videoGrid = videos.map((video) =>
        <li key={video.id} className="video-grid-item">
            <img src={video.image_url}></img>
        </li>
        );
        return (
        <ul className="video-grid">{videoGrid}</ul>
        );
    }


  // const HomePageGrid = () // working on this now SM
  
    return (

      <div className="App">
      <Router> 

        <Navbar collapseOnSelect expand="lg" className="navbar">

        <Nav.Link>
          <Link to="/" exact={true} className="navbar-logo">The Video Store</Link>
        </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">


          <Nav.Link>
              <Link to="/search" exact={true} className="navbar-link">Search</Link>
          </Nav.Link>

          <Nav.Link>
              <Link to="/customers" exact={true} className="navbar-link">Customers</Link>
          </Nav.Link>

          <Nav.Link>
              <Link to="/library" exact={true} className="navbar-link">Video Library</Link>
          </Nav.Link>

        </Nav>

        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/library" className="navbar-link">Video: {selectedVideo &&(selectedVideo.title)} </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/customers" className="navbar-link">Customer: {selectedCustomer &&(selectedCustomer.name)} </Link>
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link>
          {selectedVideo && selectedCustomer ? 
            <Button className="customer-button" onClick={() => addRental()}>
                Checkout
            </Button> : ''}

        </Nav.Link>

          </Nav>
          </Navbar.Collapse>
        </Navbar>
      
        
        <Switch>
          <Route exact={true} path="/">
            <VideoGrid/>
          </Route>
          <Route path="/search">
            <Container>
              <Search />
            </Container>
          </Route>
          <Route exact path="/customers">
            <Container>
              <CustomerList onSelectCustomer={handleCustomerChange} selectedCustomer={selectedCustomer}/>
              <SelectedCustomer customer={selectedCustomer}/>
            </Container>
          </Route>
          <Route exact  path="/library">
            <Container>
              <VideoLibrary addRental={addRental} selectedCustomer={selectedCustomer}  onSelectVideo={handleVideoChange} selectedVideo={selectedVideo}/>
              <SelectedVideo video={selectedVideo}/>
            </Container>
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
