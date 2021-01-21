import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Customer from './Customer'

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
            account_credit={customerInfo.account_credit}
            movie_count={customerInfo.movie_count}
            key={customerInfo.id}
            onClickCallback={props.onClickCallback}
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
    

export default Customers;