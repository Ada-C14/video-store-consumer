import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DisplayCustomerDetail = ({ customer }) => {
  return(
    <div className="video-container">
      <h3>Customer Details:</h3>
        <p><span>Name:</span> { customer.name },  <span>Registered At: </span> { customer.registered_at }</p>

        <ul>
          <li><span>Address: </span> { customer.address }</li>
          <li><span>City: </span> { customer.city }</li>
          <li><span>State: </span> { customer.state }</li>
          <li><span>Postal Code: </span> { customer.postal_code }</li>
          <li><span>Phone: </span>Phone: { customer.phone }</li>
        </ul>
    </div>
  );
};

DisplayCustomerDetail.propTypes = {
  customer: PropTypes.object,
};

export default DisplayCustomerDetail;