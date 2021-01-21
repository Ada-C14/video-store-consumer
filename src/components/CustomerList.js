import React, { useState, useEffect } from 'react'
import './CustomerList.css';
import propTypes from 'prop-types';
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
  );
};

CustomerList.propTypes = {
  selectCustomerCallback: propTypes.func.isRequired,
  url: propTypes.string.isRequired
};

export default CustomerList;