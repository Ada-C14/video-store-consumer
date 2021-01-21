import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Customers.css';

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/customers')
      .then(response => {
        setCustomerList(response.data);
      })
      .catch(() => {
        alert('Failed to select customers');
      });
  }, []);

  return (
    <div className="customer-container">
      {customerList.map((customer) => (
        <React.Fragment key={customer.id}>
          <button
            onClick={() => props.onSelectCustomerCallback(customer)}>Select</button>
          <div>{customer.name}</div>
        </React.Fragment>
      ))
      }
    </div>
  )
}

Customers.propTypes = {
  onSelectCustomerCallback: PropTypes.func.isRequired,
}
export default Customers;