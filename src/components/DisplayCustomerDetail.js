import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DisplayCustomerDetail.css';

const DisplayCustomerDetail = (props) => {

  if (!props.customer.title) return null; 

  return(
  <div className="video-container">
    <h3 className="App-customer-detail-title">Customer Details:</h3>
      <p><span className="App-customer-detail">Name:</span> {this.state.selectedCustomer.name},  <span className="App-customer-detail">Registered At: </span> { this.state.selectedCustomer.registered_at }</p>

      <ul>
        <li className="App-list-style"><span className="App-customer-detail">Address: </span> {this.state.selectedCustomer.address}</li>
        <li className="App-list-style"><span className="App-customer-detail">City: </span> {this.state.selectedCustomer.city}</li>
        <li className="App-list-style"><span className="App-customer-detail">State: </span> {this.state.selectedCustomer.state}</li>
        <li className="App-list-style"><span className="App-customer-detail">Postal Code: </span> {this.state.selectedCustomer.postal_code}</li>
        <li className="App-list-style"><span className="App-customer-detail">Phone: </span>Phone: {this.state.selectedCustomer.phone}</li>
        <li className="App-list-style"><span className="App-customer-detail">Account Credit: </span> {this.state.selectedCustomer.account_credit}</li>
        <li className="App-list-style"><span className="App-customer-detail">Movies Checked Out: </span> {this.state.selectedCustomer.movies_checked_out_count}</li>
      </ul>
  </div>
  );
};

DisplayCustomerDetail.propTypes = {
  selectedVideo: PropTypes.object,
};

export default DisplayCustomerDetail;