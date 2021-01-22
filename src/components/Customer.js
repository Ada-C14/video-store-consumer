
import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css'

const Customer = (props) => {

    // const {customer, callback} = props; 

    return (

        <div className="customer">
        <button onClick={() => {props.onClickCallback(props.customer)}}>select</button>
        <h3 className="customer__content">{props.customer.name}</h3>
      </div>
    )
};

Customer.propTypes = {
    name: PropTypes.string.isRequired
};
export default Customer;