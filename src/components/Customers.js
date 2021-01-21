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
            setErrorMessage(error.message);
        });
    }, []);

        // taking customer obj and turning into customer component 
    const CustomerComponents = customers.map((customer) => {
        return (< Customer 
            key={customer.id}
            name={customer.name}
            id={customer.id}
            onClickCallback={props.onClickCallback}
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
    onClickCallback: PropTypes.func.isRequired
}
export default Customers;