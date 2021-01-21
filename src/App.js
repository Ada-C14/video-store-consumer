import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoList from './components/VideoList';
// import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Link } from 'react-router-dom';
import CustomerCollection from './components/CustomerCollection';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import { Container, Row, Col, Alert} from 'react-bootstrap';
import './App.css';
import { useLocation } from 'react-router-dom'


const API_URL_BASE = 'http://localhost:3000/videos';

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    axios
      .get(API_URL_BASE)
      .then((response) => {
        const apiVideoList = response.data;
        console.log(apiVideoList);
        setVideoList(apiVideoList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });

      axios
      .get('http://localhost:3000/customers')
      .then((response) => {
        const apiCustomerList = response.data;
        console.log(apiCustomerList);
        setCustomerList(apiCustomerList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  const selectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const checkout = (customer, video) => {
    axios
    .post(`http://localhost:3000/rentals/${video.title}/check-out`, customer.id)
    .then((response) => {
      setErrorMessage(`Checkout ${video.title} to ${customer.name}.`)
    })
    .catch((error) => {setErrorMessage(error.message)})

    setSelectedCustomer('');
    setSelectedVideo('');
  };

  return (
    <main>
      <header>
        <h1>
          <Link to={'/'}>Aloha Video Store</Link>
        </h1>
      </header>
      <div>
        <Alert variant='info'>{errorMessage}</Alert>
      </div>
      <nav>
        <NavBar location={useLocation()}/>
      </nav>

      <Container>
        <Row>
          <Col>
            <Route
              exact={true}
              path={'/'}
              render={() => (
                <h2>Welcome to Aloha Video Store!</h2>
              )}
            />

            <Route
              path={'/library'}
              render={(props) => <VideoList {...props} videoList={videoList} selectedVideo={selectedVideo} onClickSelect={selectVideo} />}
            />
            <Route
              path={'/customers'}
              render={(props) => (
                <CustomerCollection {...props} customerList={customerList} selectedCustomer={selectedCustomer} onClickSelect={selectCustomer} />
              )}
            />
          </Col>
          <Col md="auto"></Col>
          <Col xs lg="2">
            <Cart customer={selectedCustomer} video={selectedVideo} onClickCheckout={checkout} />
          </Col>
        </Row>
      </Container>

      
      <footer>Copyright</footer>
    </main>
  );
};

export default App;
