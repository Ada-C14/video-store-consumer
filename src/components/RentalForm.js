import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const RentalForm = (props) => {
    const [message, setMessage] = useState('')
    const setDueDate = () => {
        const date = new Date(new Date(new Date().setDate(new Date().getDate()+7)).toString().split('GMT')[0]+' UTC').toISOString().split('T')[0]
        console.log(typeof(date) === 'string')
        return date
        
    }
    // console.log(props.selectedVideo)
    // console.log(`${props.url}/rentals/${props.selectedVideo.title}/check-out?customer_id=${props.selectedCustomer.id}&due_date=${setDueDate()}`)
    const queryParams = {
        /* eslint-disable camelcase */
        customer_id: props.selectedCustomer.id,
        due_date: setDueDate()
        /* eslint-enable camelcase */
    };
    const checkout = (queryParams) => {
        
        axios.post(`${props.url}/rentals/${props.selectedVideo.title}/check-out`, queryParams)
            .then(response => {
                setMessage(`${props.selectedCustomer.name} successully checked out ${props.selectedVideo.title}. It is due on ${setDueDate()}`)
            })
            .catch(error => {
                setMessage(error)
            })
    }


    const form = 
    <button onClick={(props) => checkout(props)}>Checkout</button>

    const error = 
    <h1>Please Select a Video and Customer to make a rental!</h1>

    const validRental = (props.selectedCustomer === null || props.selectedVideo === null ) ? error : form
    
    return (
        <div>
            
            {message}
            {validRental}
        </div>
    );
}

RentalForm.propTypes = {
    url: PropTypes.string.isRequired,
    selectedCustomer: PropTypes.object.isRequired,
    selectedVideo: PropTypes.object.isRequired
}

export default RentalForm;