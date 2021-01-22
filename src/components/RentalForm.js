import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const RentalForm = (props) => {
    const form = 
    <h1>form</h1>

    const error = 
    <h1>Please Select a Video and Customer to make a rental!</h1>


    const validRental = (props.selectedCustomer === null || props.selectedVideo === null ) ? error : form
    
    
    
    
    
    return (
        <div>
            {validRental}
        </div>
    );
}

RentalForm.propTypes = {
    selectedCustomer: PropTypes.object.isRequired,
    selectedVideo: PropTypes.object.isRequired
}

export default RentalForm;