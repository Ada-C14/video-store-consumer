import React, { Component, useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import './CustomerList.css';
import Customer from './Customer'

const CustomerList = (props) => {

    const [customerList, setCustomerList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const route = props.url + '/customers';

    useEffect(() => {
        axios.get(route)
        .then((response) => {
            const apiCustomerList = response.data
            setCustomerList(apiCustomerList);
        })
        .catch((error) => {
            setErrorMessage(error.message);
            console.log(errorMessage);
        });
    }, []);

    const customers = customerList.map((customer) => {
        return (<Customer
            key={customer.id}
            customer={customer}
            callback={props.selectCustomerCallback} />
        )
    });

    return (
        <div>
            <h1 className='validation-errors-display'> {errorMessage} </h1>
            <Table className="table-sm customer-table__table">
                <thead>
                    <tr className="customer-table__header-row">
                        <th scope="col">Select Customer</th>
                        <th scope="col">Name</th>
                        <th scope="col">Current Rentals</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    { customers }
                </tbody>
            </Table>
        </div>
    )
}



export default CustomerList; 

CustomerList.propTypes = {
    selectCustomerCallback: PropTypes.func,
    url: PropTypes.string,
}