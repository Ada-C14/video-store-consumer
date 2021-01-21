import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CustomerList.css';
import CustomerList from './CustomerList';


const Customer = (props) => {
    const { customer } = props;
    // const { name, callback, videos} = props
    // return (
    //     <div className = "customer item" >
    //     <section className = "item__details" > 
    //         <ul>
    //             <h2> {name} Customer </h2> 
    //             <p> {videos} movies checked out </p>
    //         </ul>
    //     </section >
    //     <button className = "item__button"
    //     onClick = {callback}> Select for Rental </button>
    //     </div>
    // )
    return (
        <tr className="customer-table__table-row">
            <td><button className="item_button" onClick={customer.callback}> Select {customer.name} </button> </td>
            <td>{customer.name}</td>
            <td>~~{customer.videos_checked_out_count}~~</td>
            <td>${customer.account_credit}</td>
            <td>--{customer.phone}--</td>
        </tr>
    // <li>
    //     <h3>{customer.name}</h3>
    //     <p>{customer.address}, {customer.city} {customer.state}</p>
    //     <p>{customer.phone}</p>
    //     <p>Account Credit: {customer.account_credit}</p>
    //     <p>Checked out: {customer.videos}</p>
    // </li>
    )
}

export default Customer;

Customer.propTypes = {
    customer: PropTypes.object.isRequired,
    callback: PropTypes.func
}