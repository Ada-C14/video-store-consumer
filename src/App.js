import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './components/Homepage'
import Search from './components/Search'
import Library from './components/Library'
import CustomerList from './components/CustomerList'
import './App.css';
import CheckoutReturn from './components/CheckoutReturn';

const API_URL_BASE = 'http://localhost:3000/'

const App = () => {
    
    const [errorMessage, setErrorMessage] = useState(null);
    const [customerList, setCustomerList] = useState([]);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [searchResult, setSearchResult] = useState([]);
    const [overdue, setOverdue] = useState([])

  
    useEffect(() => {
      axios.get(`${API_URL_BASE}customers`)
        .then((response) => {
          const apiCustomerList = response.data;
          setCustomerList(apiCustomerList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }, []);

    useEffect(() => {
      axios.get(`${API_URL_BASE}videos`)
        .then((response) => {
          const apiVideoList = response.data;
          setVideoList(apiVideoList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }, []);

    useEffect(() => {
      axios.get(`${API_URL_BASE}rentals/overdue`)
      .then((response) => {
        const overdueList = response.data
        setOverdue(overdueList)
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }, []);

    const selectedCustomer = (id) => {
      if (currentCustomer && id === currentCustomer.id) {
        setCurrentCustomer(null)
      } else {
        const customer = customerList.find((customer) => {
          return customer.id === id;
        });
        setCurrentCustomer(customer);
      }
    };
  
    const selectVideo = (id) => {
        if (selectedVideo && id === selectedVideo.id) {
        setSelectedVideo(null)
      } else {
        const video = videoList.find((video) => {
          return video.id === id;
        });
        setSelectedVideo(video)
      }
    };

   
 const searchVideo = (video) => {
      axios.get(`${API_URL_BASE}videos?query=${video}`)
      .then((response) => {
        const results = response.data;
        setSearchResult(results);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    };

    const addVideo = (video) => {
      axios.post(API_URL_BASE+'videos', video)
      .then( response => {
        const newVideoList = [...videoList, response.data]
        console.log(newVideoList)

        setVideoList(newVideoList)
      })
      .catch( error => {
        const errors = error.response.data.errors
        setErrorMessage(errors)
      }) 
    };

      
    const checkoutVideo = (params) => {
      axios.post(`${API_URL_BASE}/rentals/${selectedVideo.title}/check-out`, params)
      .then((response) => {
        alert(`Successfully checked out ${selectedVideo.title}`)
      })
      .catch((error) => {
        alert(`Sorry, we were unable to check out ${selectedVideo.title}`)
        setErrorMessage(error.message);
      });
      setSelectedVideo(null)
      setCurrentCustomer(null)
    }

    const returnVideo = (params) => {
      axios.post(`${API_URL_BASE}/rentals/${selectedVideo.title}/return`, params)
      .then((response) => {
        alert(`Successfully returned ${selectedVideo.title}`)
      })
      .catch((error) => {
        alert(`Sorry, we were unable to return ${selectedVideo.title}`)
        setErrorMessage(error.message);
      });
      setSelectedVideo(null)
      setCurrentCustomer(null)
    }
    
    return (
      <Router>
      <div>
        <nav className='sidenav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/library'>Library</Link>
            </li>
            <li>
              <Link to='/customers'>Customers</Link>
            </li>
          </ul>
        </nav>
        <main>
          {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}

          <section className={`selected-container ${currentCustomer || selectedVideo ? '' : 'hide'}`}>
            <CheckoutReturn 
                currentCustomer={currentCustomer} 
                selectedVideo={selectedVideo}
                onCheckoutVideo={checkoutVideo}
                onReturnVideo={returnVideo}
            />
          </section>
          <section className={`${currentCustomer || selectedVideo ? 'lower' : ''}`}>
            <Switch>
              <Route path='/search'>
                <Search 
                searchVideoCallback={searchVideo} 
                searchResult={searchResult} 
                addVideoCallback={addVideo}
                videos={videoList}/>
              </Route>
              <Route path='/library'>
                <Library 
                  videos={videoList} 
                  selectedVideo={selectedVideo} 
                  onSelectVideoCallback= {selectVideo}
                />
              </Route>
              <Route path='/customers'>
               <CustomerList 
                customers={customerList} 
                selectCustomerCallback={selectedCustomer} 
                currentCustomer={currentCustomer}/>
              </Route>
              <Route path='/'>
                <Homepage overdue={overdue}/>
              </Route>
            </Switch>
          </section>

        </main>
      </div>
    </Router>
    );
  
}

export default App;