import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';
import logo from './logo.svg';
import './App.css';


// base url depents on the link of rails server
const BASE_URL = 'http://localhost:3000/'

const App = () => {
  const [selectCustomer, setSelectedCustomer] = useState('')

  const chooseCustomer = (id) => {
    setSelectedCustomer(id.id)
  }

   return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ting-Yi and Anya's Movie Store!</h1>
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Video Search</Link>
          </li>
          <li>
            <Link to="/library">Video Library</Link>
          </li>
          <li>
            <Link to="/customers">Customer List</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/search" component={Search}>
            <Search url={BASE_URL}
                    focus='videos'/>
          </Route>
          <Route path="/library" component={Library}>
            <Library />
          </Route>
          <Route path="/customers" component={Customers}>
            <p>Selected Customer - {selectCustomer}</p>
            <Customers url={BASE_URL}
                       focus='customers'
                       selectCustomerCallback={chooseCustomer}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

