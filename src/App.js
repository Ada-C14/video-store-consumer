import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoList from './components/VideoList';
import SearchForm from './components/SearchForm';

// import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Link } from 'react-router-dom';
import CustomerCollection from './components/CustomerCollection';
import NavBar from './components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';

const API_URL_BASE = 'http://localhost:3000/videos';

const customers = [
  { name: 'Lisa', email: 'lisa@ada.org', phone: '321-123-1234' },
  { name: 'Jessica', email: 'jessica@lovelace.com', phone: '432-432-4321' },
  { name: 'Zoe', email: 'zoe@summerday.com', phone: '987-654-4321' },
];

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [customerList, setCustomerList] = useState(customers);
  const [errorMessage, setErrorMessage] = useState(null);
  const [videoResults, setVideoResults] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL_BASE)
      .then((response) => {
        const apiVideoList = response.data;
        // console.log(apiVideoList);
        setVideoList(apiVideoList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        // console.log(error.message);
      });
  }, []);

  const searchVideo = (video) => {
    axios
      .get(`${API_URL_BASE}/${video}`)
      .then((response) => {
        const videoDetails = response.data;
        setVideoResults(videoDetails);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <main>
      <header>
        <h1>
          <Link to={'/'}>Aloha Video Store</Link>
        </h1>
      </header>
      <div>
        <p>{errorMessage}</p>
      </div>
      <nav>
        <NavBar />
      </nav>
      <Route
        exact={true}
        path={'/'}
        render={() => (
          <div>
            <h2>Latest</h2>
            <Container>
              <Row>
                <Col>Video 1 with pic</Col>
                <Col>video 2 with pic</Col>
                <Col>video 3 with pic</Col>
              </Row>
            </Container>
          </div>
        )}
      />

      <Route
        path={'/library'}
        render={(props) => <VideoList {...props} videoList={videoList} />}
      />
      <Route
        path={'/customers'}
        render={(props) => (
          <CustomerCollection {...props} customerList={customerList} />
        )}
      />
      <Route
        path={'/search'}
        render={(props) => (
          <SearchForm
            {...props}
            videoList={videoList}
            searchVideoCallback={searchVideo}
            videoResults={videoResults}
          />
        )}
      />
      <footer>Copyright</footer>
    </main>
  );
};

export default App;
