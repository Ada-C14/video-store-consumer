import React, { useState } from 'react';
import './Customer.css'
import PropTypes from 'prop-types';



const Customer = (props) => {
    const [showCustomerDetails, setShowCustomerDetails] = useState(false)
    const onSelect = () => {
        props.onSelectCustomerCallback(props.id);
    }

    return (
        <div className="customer">
        <h2>{props.name}</h2>
        <img className='default_image' src='https://i.pinimg.com/originals/2a/e0/fb/2ae0fbcdb3a950b6153a5fcefc0c9fb7.jpg' alt='default image'
        onMouseEnter={() => setShowCustomerDetails(true)}
        onMouseLeave={() => setShowCustomerDetails(false)}/>
        {showCustomerDetails && (
            <ul>
            <p>Address: {props.address}, {props.city}, {props.state}-{props.postal_code}  </p>
            <p>Phone: {props.phone}</p>
            <p>Account Credit: {props.account_credit}</p>
            <p>Videos Checked Out: {props.videos_checked_out_count}</p>
        </ul>
        )}
        <br/>
        <button onClick={onSelect}> Select </button>
        </div>
    )
}


export default Customer; 
