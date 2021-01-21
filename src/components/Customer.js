import React, {useState} from 'react';
import PropTypes from 'prop-types';

// import './Customer.css'

const Customer = (props) => {
    return (
    <ul className="customer-row">
        <div class="customer-text">
            <li><h1>{props.customer.name}</h1></li>
            <li>{props.customer.address}</li>
            <li>{props.customer.city}</li>
            <li>{props.customer.state}</li>
            <li>{props.customer.postal_code}</li>
            <li>{props.customer.phone}</li>
            <li>{props.customer.account_credit}</li>
            <li>{props.customer.videos_checked_out_count}</li>
            <li><button onClick={() => props.onSelectCustomer(props.customer.id, props.customer.name)}>Select Customer</button></li>
        </div>
    </ul>
    );
}

Customer.propTypes = {

};

export default Customer;
