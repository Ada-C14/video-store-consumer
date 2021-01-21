import React from 'react';

const Customer = (props) => {

    const selectCustomer = () => {
        props.onClickCallback(props);
    }

    return (
        <div className= "customer-container">
            <h4> {props.name}</h4>
            <ul>
                <li>Account Credit: {props.account_credit}</li>
                <li>Movie Checked out: {props.movie_count}</li>
            </ul>
            <button onClick={selectCustomer}>Select Customer</button>
        </div>
    )
}

export default Customer;