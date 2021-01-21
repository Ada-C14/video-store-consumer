import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Customers from './components/Customers';
import Videos from './components/Videos';
import SearchForm from './components/SearchForm';




function App() {

// WHY USEEFFECT AUDREY?????????????????????????????????????????????
  const BASE_URL = 'http://localhost:3000'
// 
  const searchVideo = (searchQuery) => { 
      // useEffect(() => {
        axios.get(`${BASE_URL}/videos?query=${searchQuery}`)
        .then((response) => {
          console.log(response.data);
          //  response.data;
          // console.log(apiCustomerResponse[0].name)
          // Set the state
          // setCustomersList(railsCustomerList);
        })
        .catch((error) => {
          // setErrorMessage(error.message);
          // console.log(error.message);
        });
  // }, []);
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
      <Customers baseUrl={BASE_URL}/>
      <Videos />
      <SearchForm searchCallback={searchVideo} />
      </p>
    </div>
  );

}

export default App;
