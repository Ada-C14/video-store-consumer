import React, { useState, useEffect } from 'react'
import Navbar from './Navbar.js';
import './CustomerList.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const CustomerList = props => {
  const [customers, setCustomers] = useState([]);
  const [alert, setAlert] = useState(null);

  const url = props.url + '/customers';

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        setAlert(error.message);
      });
  }, []);

  const addCustomerRental = rentalCustomer => {
    props.selectCustomerCallback(rentalCustomer);
    setAlert(`Selected ${rentalCustomer.name} for rental transaction.`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar customer={props.customer} movie={props.movie} checkoutCallback={props.checkoutCallback} />
      <div className='list'>
        { alert ? alert : '' }
        <ul className='customer-list'>
          { customers.map((customer) => 
            <li key={customer.id} className='customer-id'>
              { customer.name }
              <button 
                className='select-button' 
                onClick={() => { addCustomerRental(customer); scrollToTop(); }}
              >
                select
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

CustomerList.propTypes = {
  selectCustomerCallback: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  customer: PropTypes.string,
  movie: PropTypes.string,
  checkoutCallback: PropTypes.func
};

export default CustomerList;