
import React from 'react';
import PropTypes from 'prop-types';

const Customer = ({ id, name, address, city,state, zipcode,registeredAt, phone, accountCredit,moviesCheckedOut, onSelectCustomer }) => {

    return (
        <section className= "customer-profile">
            <h3> Customer: {name}</h3>
            <ul>
                <li>Movies Checked Out: {moviesCheckedOut} </li>
                <li>Account Credit: {accountCredit} </li>
                <li>Registration date:{registeredAt} </li>
                <li>Phone: {phone} </li>
                <li>Address: {address},{city},{state},{zipcode} </li>
                <button
                onClick={()=> onSelectCustomer(id)}>
                    Select
                </button>
            </ul>
        </section>
    );
};

Customer.prototypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    registeredAt: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
    accountCredit: PropTypes.string,
    moviesCheckedOut: PropTypes.string,
};
export default Customer;