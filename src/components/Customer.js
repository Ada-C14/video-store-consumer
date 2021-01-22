import React from 'react';
import './Customers.css';
import PropTypes from 'prop-types';

const Customer = ({name, id, onSelectedCustomer}) => {
    return (
        <div className="customer">
            <h2 onClick={() => {onSelectedCustomer(id)}} className='customers-hover'>{name}</h2>
        </div>
    )
};

Customer.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onSelectedCustomer: PropTypes.func.isRequired,
}

export default Customer;