import React from 'react';
import PropTypes from 'prop-types';
import './SingleCustomer.css';

const SingleCustomer = (props) => {
  return (
    <table className="table">
      <tr>
        <th>Id</th>  
        <th>Name</th>
        <th>Account Credit</th>
        <th>Videos Checked out Count</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Postal Code</th>
        <th>Phone#</th>
        <th>Registered At</th>
        <th>Selected</th>
      </tr>
      <tr>
        <th>{props.id}</th>  
        <th>{props.name}</th>
        <th>{props.accountCredit}</th>
        <th>{props.videosCheckedOutCount}</th>
        <th>{props.address}</th>
        <th>{props.city}</th>
        <th>{props.state}</th>
        <th>{props.postalCode}</th>
        <th>{props.phone}</th>
        <th>{props.registeredAt}</th>
        <th></th>
       </tr>
    </table>
  )
}
  
SingleCustomer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  accountCredit: PropTypes.number.isRequired,
  videosCheckedOutCount: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.number.isRequired,
  phone: PropTypes.number.isRequired,
  registeredAt: PropTypes.number.isRequired,
};

export default SingleCustomer;