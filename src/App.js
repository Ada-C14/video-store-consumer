import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Checkout from './components/Checkout'
// import Search from './components/Search';
import './App.css';

const App = () => {
    const [video, setVideo] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [displayMessage, setDisplayMessage] = useState('');

    if (displayMessage) {
      setTimeout(() => {
        setDisplayMessage('');
      }, 3000)
    }
  

    return (
      <div className="App">

        <Navigation />
        {displayMessage && <div className="display-message">
          <h1>{displayMessage}</h1>
        </div>}
        {(video || customer) && <Checkout video={video} customer={customer} videoCallback={setVideo} customerCallback={setCustomer} setDisplayMessage={setDisplayMessage} /> }
        <div className="main-content">
          <Main videoCallback={setVideo} customerCallback={setCustomer} className="main" setDisplayMessage={setDisplayMessage} video={video} customer={customer} />
        </div>
        {/* <div className="hero-image"><img src="./homepage-hero.png" alt="" /></div> */}
        
        
      </div>
    );
};

export default App;
