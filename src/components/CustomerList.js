import React, { useState, useEffect } from 'react'
import './CustomerList.css';
import propTypes from 'prop-types';
import axios from 'axios';



export default function CustomerList() {

    const [customers, setCustomers] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3000/customers')
            .then((response) => {
                console.log(response)
                setCustomers(
                    response.data
                );
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, []);

    return (
        <div className='list'>
            <ul>
                {customers.map((customer) => <li key={customer.id}>{customer.name}</li>)}
            </ul>
            {errorMessage ? <div><h2 className="error-display">{errorMessage}</h2></div> : ''}
        </div>
    );

    CustomerList.propTypes = {
        customers: propTypes.array,
        selectCustomerCallback: propTypes.func.isRequired
    }


}