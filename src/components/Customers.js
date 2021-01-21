import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Customer from './Customer'
import PropTypes from 'prop-types';
import './Customers.css'

const Customers = (props) => {
    
    const allCustomersURL = 'http://localhost:3000/customers'

    const [customers,setCustomersList] = useState([]);
    const [errorMessage,setErrorMessage] = useState(null);

    // this will get us a list of customers from API and update the state
    useEffect(() => {
        axios.get(allCustomersURL)
        .then((response) => {
            setCustomersList(
                response.data
            );
        })
        .catch((error) => {
            setErrorMessage(error.message); // improve error messages 
        });
    }, []);

        // taking customer obj and turning into customer component 
    const CustomerComponents = customers.map((customer) => {
        return (< Customer 
            key={customer.id}
            customer={customer}
            onClickCallback={props.selectCustomerCallback}
            />)
        })

    return (
        <div className= 'Customers'>
            <ul className= "customers-list" >
            <h3> All Customers</h3>
            {CustomerComponents}
            { errorMessage ? <div><h2>{errorMessage}</h2></div> : ''}
            </ul>
        </div>
        );
    };
    
Customers.propTypes = {
    selectCustomerCallback: PropTypes.func.isRequired
}
export default Customers;