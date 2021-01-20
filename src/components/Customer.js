import React from 'react';
import PropTypes from 'prop-types';

const Customer = ({customer}) => {
    return (
        <div>
            <h3>{customer.name}</h3>
            {/* TODO - how to convert JS string date into, say, year or month-year */}
            <p>Customer since {customer.registeredAt}</p>
            <p>Videos currently rented: {customer.videosCheckedOutCount}</p>
            {/* TODO wtf does "account_credit" mean? these folks all carrying positive balances at Hollywood Video? */}
            <p>Account Credit: {customer.accountCredit}</p>
            <p>{customer.phone}</p>
            <p>{customer.address}</p>
            <p>{customer.city}, {customer.state} {customer.postalCode}</p>
        </div>
    )
}

Customer.propTypes = {
    customer: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        registeredAt: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        postalCode: PropTypes.string,
        phone: PropTypes.string,
        accountCredit: PropTypes.number,
        videosCheckedOutCount: PropTypes.number,
    })
}

export default Customer;