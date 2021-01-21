import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import Async, { makeAsyncSelect } from 'react-select/async';
import Customer from './Customer';

// import './Customers.css';

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

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

  const customerComponents = customerList.map((cust) => {
    return (<Customer 
        id={cust.id}
        name={cust.name}
        // overview={cust.overview}
        // release_date={cust.releaseDate}
        // image_url={cust.imageUrl}
        // external_id={cust.externalId} 
        // key={cust.id} 
    />);
  });


const selectCustomer = (id) => {
    if (selectedCustomer === null) {
        let cust = customerList.find(cust => cust.id === id);
        setSelectedCustomer(cust);
    } else {
        setSelectedCustomer(null)
        let cust = customerList.find(cust => cust.id === id);
        setSelectedCustomer(cust);
    }
}

return (
    <div>
        <h3>Our Loyal Customers</h3>
        <h6>Current Selected Customer: {selectedCustomer}</h6>
        <p>{errorMessage}</p>
        {customerComponents}
    </div>
);
};

Customers.propTypes = {
  url: PropTypes.string.isRequired
};

export default Customers;