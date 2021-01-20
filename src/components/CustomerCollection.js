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
            // Still need to handle errors
            setErrorMessage(error.message);
        });
    }, []);

    const customerComponents = customerList.map((customer, i) => {
        return (
            <div key={i}>
            <Customer
                customer={customer}
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

// StudentCollection.propTypes = {
//   students: PropTypes.arrayOf(PropTypes.shape(
//     {
//       fullName: PropTypes.string.isRequired,
//       email: PropTypes.string,
//       present: PropTypes.bool,
//       id: PropTypes.number.isRequired,
//     },
//   )),
//   onUpdateStudent: PropTypes.func.isRequired,
// }



export default CustomerCollection;
