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
        <div className="main-content">
          <Checkout video={video} customer={customer} />
          <Main videoCallback={setVideo} customerCallback={setCustomer} className="main" />
        </div>
        
      </div>
    );
};

export default App;
