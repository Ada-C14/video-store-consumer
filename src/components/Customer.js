import React from 'react';
import PropTypes from 'prop-types';

import './Customer.css'

const Customer = (props) => {
    return (
        <div className="customer">
            {props.name}
            <div><button className="select-button" onClick={() => props.onClickCallback(props)}>Select</button></div>
        </div>
    )
}

Customer.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    registeredAt: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    accountCredit: PropTypes.string.isRequired,
    videosCheckedOutCount: PropTypes.string.isRequired,
    onClickCallback: PropTypes.func.isRequired,
}

export default Customer;