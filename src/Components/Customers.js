import React, { Component, useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer.js';
import axios from 'axios';

const CUSTOMERS_URL = 'http://localhost:3000/customers'

const Customers = (props) => {

  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get(CUSTOMERS_URL)
      .then((res) => {
        const apiCustomers = res.data;
        setCustomerList(apiCustomers)
      })
      .catch((err) => {
        setErrorMessage(err.message)
      })
  }, [])

  // customer list is arr of objects

  const customerComponents = customerList.map((customer) => {
    return (
      <Customer 
        key={customer.id}
        id={customer.id}
        name={customer.name}
        videosCheckedOut={customer.videos_checked_out_count}
      />
    )
  })




    return (
      <div>
         {customerComponents}
      </div>
    )
}

Customers.propTypes = {

};

export default Customers;