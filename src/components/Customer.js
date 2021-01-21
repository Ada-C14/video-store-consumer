import React from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

const Customer = (props) => {
  return (

    <tr 
      onClick={() => props.selectCustomerCallback(props.customerId)} 
      className={`${props.currentCustomer && props.customerId === props.currentCustomer.id ? 'selected' : 'select'}`}
    >
      <td><span>ID</span>{props.customerId} </td>
      <td><span>Name</span>{props.customerName} </td> 
      <td><span>Checkout Count</span>{props.videosCheckedOutCount}</td>
    </tr>

  )
}

Customer.propTypes = {
  customerId: PropTypes.number,
  customerName: PropTypes.string.isRequired,
  videosCheckedOutCount: PropTypes.number,
  selectCustomerCallback: PropTypes.func.isRequired,
  currentCustomer: PropTypes.object,
};

export default Customer;