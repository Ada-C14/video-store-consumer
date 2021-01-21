import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import axios from 'axios';

const CustomerList = (props) => {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState('');
    

    useEffect(() => {
        axios.get(`http://localhost:3000/customers/`)
            .then((response) => {
                const allCustomers = [];
                response.data.forEach((customer) => {
                    allCustomers.push(customer);
                });
                setCustomers(allCustomers);
            })
            .catch((error) => {
                setError(`Error: ${error.response.statusText}`);
            })
    }, []);

    const formatCustomer = customer => {
        return <Customer 
            key={customer.id}
            id={customer.id}
            name={customer.name}
            registeredAt={customer.registered_at}
            address={customer.address}
            city={customer.city}
            state={customer.state}
            postalCode={customer.postal_code}
            phone={customer.phone}
            accountCredit={customer.account_credit}
            videosCheckedOutCount={customer.videos_checked_out_count}
            selectCustomerCallback={props.selectCustomerCallback}
            isSelected={props.selectedCustomer? customer.id === props.selectedCustomer.id : null}
        />
    }

    return (
        <div>
            { customers.map(formatCustomer) }
            { error ? error : '' }
        </div>
    );
}

// PROPS? - should App hold the URL for the api call and pass it down to CustomerList?
CustomerList.propTypes = {
    selectCustomerCallback: PropTypes.func,
    selectedCustomer: PropTypes.object
};


export default CustomerList;