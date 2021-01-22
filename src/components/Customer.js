import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  const customer = props.customer
  return (

    <tr class="table-active">
        <th scope="row">{customer.name}</th>
        <td>{customer.phone}</td>
        <td>${customer.account_credit}</td>
        <td>{customer.videos_checked_out_count}</td>
        <td><button onClick={() => (props.selectedCustomerCallback(customer))} className="btn btn-outline-primary">Select!</button></td>
    </tr>
)
}

Customer.propTypes = {
  selectedCustomerCallback: PropTypes.func.isRequired
  };
  

export default Customer;    