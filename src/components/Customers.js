import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Customer from './Customer'
import PropTypes from 'prop-types';

const Customers = (props) => {
    

    const [customers,setCustomersList] = useState([]);
    const [errorMessage,setErrorMessage] = useState(null);

    // this will get us a list of customers from API and update the state
    useEffect(() => {
        axios.get('http://localhost:3000/customers')
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
    const CustomerComponents = customers.map((customerInfo) => {
        return (< Customer 
            id={customerInfo.id}
            name={customerInfo.name}
            address={customerInfo.address}
            city={customerInfo.city}
            state={customerInfo.state}
            zipcode={customerInfo.zipcode}
            registeredAt={customerInfo.registeredAt}
            phone={customerInfo.phone}
            accountCredit={customerInfo.accountCredit}
            moviesCheckedOut={customerInfo.moviesCheckedOut}
            key={customerInfo.id}
            onSelectCustomer={props.onSelectCustomer}
            />)
        })


    return (
        <div className= 'Customers'>
            <ul className= "customers-list" >
            <h3> All Customers</h3>
            {CustomerComponents}
            </ul>
        </div>
        );
    };
    
// Customers.prototype = {
//     id: PropTypes.number,
//     name: PropTypes.string,
//     account_credit: PropTypes.number,
//     movie_count: PropTypes.number,
// }
export default Customers;