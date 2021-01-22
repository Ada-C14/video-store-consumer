import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const RentalForm = (props) => {
    const setDueDate = () => {
        
        // let date = new Date()
        // date.setDate(date + 7)
        // return date.toISOString().split('T')[0]
        const date = new Date(new Date(new Date().setDate(new Date().getDate()+7)).toString().split('GMT')[0]+' UTC').toISOString().split('T')[0]
        return date
    }

    const checkout = (props, duedate) => {
        axios.post(`${props.url}/rentals/${props.selectedVideo.title}/check-out?customer_id=${props.selectedCustomer.id}&due_date=`).then()
    }


    const form = 
    <h1>form</h1>

    const error = 
    <h1>Please Select a Video and Customer to make a rental!</h1>

    const validRental = (props.selectedCustomer === null || props.selectedVideo === null ) ? error : form
    
    return (
        <div>
            {validRental}
            {setDueDate()}
        </div>
    );
}

RentalForm.propTypes = {
    url: PropTypes.string.isRequired,
    selectedCustomer: PropTypes.object.isRequired,
    selectedVideo: PropTypes.object.isRequired
}

export default RentalForm;