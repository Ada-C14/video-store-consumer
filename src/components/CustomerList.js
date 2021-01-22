import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import CustomerButton from './CustomerButton';
const BASE_URL = 'http://localhost:3000/customers';
const axios = require('axios');

const CustomerList = (props) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL)

    .then((response) => {
      setCustomers(response.data);
    });

  }, []);

  const generateCustomerButtons = customers.map((customer) => {
    return <CustomerButton key={ customer.id } customer={ customer } onClickCallBack={ props.setSelectedCustomerCallBack } />
  })

  return (
  <div className="CustomerList">
    { generateCustomerButtons }
  </div>);
};

CustomerList.propTypes = {
  setSelectedCustomerCallBack: PropTypes.func.isRequired,
};

export default CustomerList;