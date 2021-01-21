import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

// import './Customers.css';

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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
      onClickCallback={props.onClickCallback}
      // overview={cust.overview}
      // release_date={cust.releaseDate}
      // image_url={cust.imageUrl}
      // external_id={cust.externalId} 
      // key={cust.id} 
    />);
  });


// const selectCustomer = (id) => {
//     let cust = customerList.find(cust => cust.id === id);
//     setSelectedCustomer(cust);
// }

return (
  <div>
    <h3>Our Loyal Customers</h3>
    <p>{errorMessage}</p>
    {customerComponents}
  </div>
);
};

Customers.propTypes = {
  url: PropTypes.string.isRequired,
  onClickCallback: PropTypes.string.isRequired
};

export default Customers;