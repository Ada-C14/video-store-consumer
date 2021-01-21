import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DisplayCustomerDetail.css';

const DisplayCustomerDetail = ({ customer }) => {

  if (!customer.title) return null; 

  return(
  <div className="video-container">
    <h3 className="App-customer-detail-title">Customer Details:</h3>
      <p><span className="App-customer-detail">Name:</span> {customer.name},  <span className="App-customer-detail">Registered At: </span> { this.state.selectedCustomer.registered_at }</p>

      <ul>
        <li className="App-list-style"><span className="App-customer-detail">Address: </span> {customer.address}</li>
        <li className="App-list-style"><span className="App-customer-detail">City: </span> {customer.city}</li>
        <li className="App-list-style"><span className="App-customer-detail">State: </span> {customer.state}</li>
        <li className="App-list-style"><span className="App-customer-detail">Postal Code: </span> {customer.postal_code}</li>
        <li className="App-list-style"><span className="App-customer-detail">Phone: </span>Phone: {customer.phone}</li>
        <li className="App-list-style"><span className="App-customer-detail">Account Credit: </span> {customer.account_credit}</li>
        <li className="App-list-style"><span className="App-customer-detail">Movies Checked Out: </span> {customer.movies_checked_out_count}</li>
      </ul>
  </div>
  );
};

DisplayCustomerDetail.propTypes = {
  selectedCustomer: PropTypes.object,
};

export default DisplayCustomerDetail;