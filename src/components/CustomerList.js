import React, { useState, useEffect } from 'react';
import './CustomerList.css';
import PropTypes from 'prop-types'
import Customer from './Customer';
import DisplayCustomerDetail from './DisplayCustomerDetail';
const BASE_URL = 'http://localhost:3000/customers';
const axios = require('axios');

const CustomerList = (props) => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState();

  useEffect(() => {
    axios.get(BASE_URL)

    .then((response) => {
      setCustomers(response.data);
    });

  }, []);

  const setSelectedCustomerCallBack = (customer) => {
    setSelectedCustomer(customer);
  };

  const generateCustomers = customers.map((customer) => {
    return <Customer key={ customer.id } customer={ customer } onClickCallBack= { setSelectedCustomerCallBack } />
  })

  return (
  <div className="CustomerList">
    <h3>Customer List:</h3>
    { generateCustomers }

    {
      selectedCustomer &&
      <DisplayCustomerDetail customer={ selectedCustomer }/>
    }
  </div>);
};

CustomerList.propTypes = {
  setSelectedCustomerCallBack: PropTypes.func.isRequired,
};

export default CustomerList;