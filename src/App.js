import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Search from './components/Search/Search'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>

          </header>
          
          <nav>
            <Link to='/search'>Search The Movie DB</Link>
          </nav>
          

          
          <Route path='/search'>
            <Search />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
