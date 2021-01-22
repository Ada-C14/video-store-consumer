import React from 'react';
import PropTypes from 'prop-types';

import './Customer.css'

const Customer = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.registeredAt.substr(0, 10)}</td>
            <td>{props.videosCheckedOutCount}</td>
            <td className="select-button"><button onClick={() => props.onClickCallback(props)}>Select</button></td>
        </tr>
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