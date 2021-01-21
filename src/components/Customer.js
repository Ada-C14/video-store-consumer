import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './Customer.css'

const Customer = (props) => {
    return (
    <ul className="customer-row">
        <div class="customer-text">
            <li><h1>{props.customer.name}</h1></li>
            <li><strong>Address: </strong>{props.customer.address}</li>
            <li>{props.customer.city}, {props.customer.state} {props.customer.postal_code}</li>
            <li><strong>Phone: </strong>{props.customer.phone}</li>
            <li><strong>Account Credit: </strong>${props.customer.account_credit}</li>
            <li><strong>Videos Checked Out: </strong>{props.customer.videos_checked_out_count}</li>
            <li><Button variant="outline-info" onClick={() => props.onSelectCustomer(props.customer.id, props.customer.name)}>Select Customer</Button></li>
        </div>
    </ul>
    // <tr>
    //     <td>{props.customer.name}</td>
    //     <td>{props.customer.address}</td>
    //     <td>{props.customer.phone}</td>
    //     <td>{props.customer.account_credit}</td>
    //     <td>{props.customer.videos_checked_out}</td>
    // </tr>
    );
}

Customer.propTypes = {

};

export default Customer;
