import React, { useState, useEffect } from 'react';
import Customer from './Customer';
import axios from 'axios';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(null)

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

    const selectCustomer = (selected) => {
        setSelectedCustomer(selected);
        return;
      }

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
            selectCustomerCallback={selectCustomer}
            isSelected={selectedCustomer? customer.id === selectedCustomer.id : null}
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

export default CustomerList;