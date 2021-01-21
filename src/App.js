import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Checkout from './components/Checkout'
import Search from './components/Search';
import './App.css';

const App = () => {
    const [video, setVideo] = useState(null);
    const [customer, setCustomer] = useState(null);

    return (
      <div className="App">
        <Navigation />
        <Checkout video={video} customer={customer} videoCallback={setVideo} customerCallback={setCustomer} />
        <div className="main-content">
          
          <Main videoCallback={setVideo} customerCallback={setCustomer} className="main" />
        </div>
        
      </div>
    );
};

export default App;
