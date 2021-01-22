import VideoSearch from './components/VideoSearch';
import VideoLibrary from './components/VideoLibrary';
import CustomerList from './components/CustomerList';
import Rentals from './components/Rentals';
import axios from 'axios';
import moment from 'moment';

import React, { Component } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chosenCustomer: {},
      chosenVideo: {},
      message: null,
    }
  }

  selectCustomer = (chosenCustomer) => {
    this.setState({chosenCustomer})
  }

  selectVideo = (chosenVideo) => {
    this.setState({chosenVideo})
  }

  setMessage = (message) => {
    this.setState({message})
  }

  resetRentalQueue = () => {
    console.log('Rental Queue CLEARED');
    this.setState({
      chosenCustomer: {},
      chosenVideo:{},
    })
  };
  
  checkoutVideo = () => {
    if (this.state.chosenVideo && this.state.chosenCustomer) {
      const title = this.state.chosenVideo.title
      const dueDate = moment().add(7, 'days').format('MMM DD YYYY');

      const params = {
        customerID: this.state.chosenCustomer.id,
        videoID: this.state.chosenVideo.id,
        dueDate: dueDate,
      }
    
      const checkoutURL = this.API_URL + `/rentals/${title}/check-out`;

      axios.post(checkoutURL, params)
      .then(() => {
        this.setMessage(`${this.state.chosenVideo.title} was successfully checked out to ${this.state.chosenCustomer.name}`);
        this.resetRentalQueue();
      })
      .catch((error) => {
        this.setMessage(error.message)
      });
    } else {
      this.setMessage('Nothing done, make sure you have a customer and video selected')
    }
  }

  visibility = () => {
    if (this.state.chosenCustomer.name && this.state.chosenVideo.title) {
      return ''
    } else {
      return 'disabled'
    }
  }

  API_URL = 'http://localhost:3000'
  

  render() {
    
    return (
      <Router>
      <div>
        <nav>
          <p> {this.state.message} </p>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Video Search</Link>
            </li>
            <li>
              <Link to='/library'>Video Library</Link>
            </li>
            <li>

              <Link to='/customers'>Customers</Link>
            </li>
            </ul>
            <ol>
              <li>Selected Customer: {this.state.chosenCustomer.name}</li>
              <li>Selected Video:{this.state.chosenVideo.title}</li>
              <button onClick={this.checkoutVideo} className= { `button button-large ${ this.visibility() }` }>
                Check out {this.state.chosenVideo.title} to {this.state.chosenCustomer.name}
              </button>
            </ol>
        </nav>

        <Switch>
          <Route path="/search"
            component={ props =>
            <VideoSearch { ...props }/>
            }/>
          <Route path="/library"
            component={ props => 
            <VideoLibrary { ...props } selectVideoCallback={this.selectVideo} />
            }/>
          <Route path="/customers" 
            component={ props => 
            <CustomerList { ...props }
            selectCustomerCallback={this.selectCustomer}
            url={this.API_URL}/>
          }/>
          {/* <Route path="/rentals" component={props =>
          <Rentals { ...props } 
          selectedVideo={this.state.chosenVideo}
          selectedCustomer={this.state.chosenCustomer}
          resetCallback={this.resetRentalQueue}
          url={this.API_URL}
          setMessage={this.setMessage}/>
          }/> */}
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );


function Home() {
  return <h2>Home</h2>;
}

function Library() {
  return <h2>About</h2>;
}

// function Customers() {
//   return <h2>Users</h2>;
// }


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
  };
};


export default App;