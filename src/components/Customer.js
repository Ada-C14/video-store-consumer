import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

const Customer = (props) => {
  return (
    <div>
      {props.customer_id} 
      {props.customer_name}    
    </div>
  )
}



Customer.propTypes = {

};

export default Customer;