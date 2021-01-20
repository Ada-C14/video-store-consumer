import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

const Customer = (props) => {
  return (
    <div>
      {props.customerId} 
      {props.customerName}  
      <button
        onClick={() => props.selectCustomerCallback(props.customerId)}>
        {props.currentCustomer && props.customerId === props.currentCustomer.id ? 'Selected' : 'Select'}
      </button>
      

    </div>
  )
}

Customer.propTypes = {
  customerId: PropTypes.number.isRequired,
  customerName: PropTypes.string.isRequired,
  videosCheckedOutCount: PropTypes.number,
  selectCustomerCallback: PropTypes.func.isRequired,
  currentCustomer: PropTypes.object,
};

export default Customer;