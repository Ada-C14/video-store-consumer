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
      registeredAt={cust.registered_at}
      phone={cust.phone}
      key={cust.id} 
      address={cust.address}
      city={cust.city}
      postalCode={cust.postal_code}
      accountCredit={cust.account_credit}
      videosCheckedOutCount={cust.videos_checked_out_count}
    />);
  });

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