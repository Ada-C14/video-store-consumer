import React, { useState, useEffect } from 'react'
import './CustomerList.css';
import propTypes from 'prop-types';
import axios from 'axios';

const CustomerList = props => {
  const [customers, setCustomers] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const url = props.url + '/customers';

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div className='list'>
      <ul className='customer-list'>
        { customers.map((customer) => 
          <li key={customer.id} className='customer-id'>
            { customer.name }
            <button className='select-button' onClick={() => { props.selectCustomerCallback(customer) }}>select</button>
          </li>
        )}
      </ul>
      { errorMessage ? <div><h2 className="error-display">{errorMessage}</h2></div> : '' }
    </div>
  );
};

CustomerList.propTypes = {
  selectCustomerCallback: propTypes.func.isRequired,
  url: propTypes.string.isRequired
};

export default CustomerList;