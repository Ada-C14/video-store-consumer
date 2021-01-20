import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import axios from 'axios';
import './CustomerList.css'

const CustomerList = (props) => {
  const [customers, setCustomers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        setCustomers(response.data)
      })
      .catch((error) => {
      setErrorMessage(error.message);
      });
  },[]);

  const customerComponents = customers.map((customer) => {
    return(< Customer key={customer.id} name={customer.name} />)
  })

  return(
    <div className="customer-list">
      {customerComponents}
      { errorMessage ? <div><h2>{errorMessage}</h2></div> : ''}
    </div>
  )};

CustomerList.propTypes = {
  
}
export default CustomerList;