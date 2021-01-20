import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

const Customer = (props) => {
  return (
    <div>
      {props.customer_id} 
      {props.customer_name}  
      <button
        onClick={() => props.selectCustomerCallback(props.customer_id)}>
        {props.currentCustomer ? props.customer_id === props.currentCustomer.id ? 'Selected' : 'Select': 'Select'}
      </button>
      

    </div>
  )
}



Customer.propTypes = {

};

export default Customer;