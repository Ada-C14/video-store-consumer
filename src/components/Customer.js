import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CustomerList.css';
import CustomerList from './CustomerList';


const Customer = (props) => {
    const { customer,callback } = props;

    return (
        <tr className="customer-table__table-row">
            <td><button className="item_button" onClick={() => {callback(customer)}}> Select {customer.name} </button> </td>
            <td>{customer.name}</td>
            <td>{customer.videos_checked_out_count}</td>
            <td>${customer.account_credit}</td>
            <td>{customer.phone}</td>
        </tr>
    )
}

export default Customer;

Customer.propTypes = {
    customer: PropTypes.object.isRequired,
    callback: PropTypes.func
}