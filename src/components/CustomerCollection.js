import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import axios from 'axios';

const API_URL_BASE = 'http://localhost:3000/customers';

const CustomerCollection = (props) => {

    const [customerList, setCustomerList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios.get(API_URL_BASE)
        .then((response) => {
            setCustomerList(response.data);
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
    }, []);

    const customerComponents = customerList.map((customer, i) => {
        return (
            <div key={i}>
            <Customer
                customer={customer} onSelectCustomer={props.onSelectCustomer}
            />
            </div>
        );
        });

    return (
        <div className = "CustomerCollection">
            {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
            {customerComponents}
        </div>
        );
};

CustomerCollection.propTypes = {
    onSelectCustomer: PropTypes.func.isRequired,
};

export default CustomerCollection;
