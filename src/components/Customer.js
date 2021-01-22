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
    name: PropTypes.string.isRequired,
    onClickCallback: PropTypes.func.isRequired
}

export default Customer;