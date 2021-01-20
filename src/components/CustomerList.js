import React, { Component, useEffect, useState } from 'react';
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
            const apiCustomerList = response.data.map((apiCustomer) => {
                return {
                    id: apiCustomer['id'],
                    name: apiCustomer['name'],
                    videosOut: apiCustomer['videos_checked_out_count'],
                }
            });
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
            id={customer.id}
            name={customer.name}
            videos={customer.videosOut}
            callback={props.selectCustomerCallback} />
        )
    });

    return (
        <div>
            <h1>Customer List</h1>
            < main > {customers} </main>
        </div>
    )
}



export default CustomerList; 