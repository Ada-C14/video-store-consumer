import React, { Component } from 'react';
// import './App/css';
import Nav from './components/Nav';
import Selected from './components/Selected';
import Search from './components/Search';

import Library from './components/Library';

import Home from './components/Home';
import Customers from './components/Customers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route path="/customers" component={Customers} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
