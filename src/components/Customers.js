import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// import './Customers.css';

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.url}/customers`)
    .then((response) => {
      const apiCustomerList = response.data
      setCustomerList(apiCustomerList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);
};

Customers.propTypes = {
  url: PropTypes.string.isRequired
};

export default Customers;