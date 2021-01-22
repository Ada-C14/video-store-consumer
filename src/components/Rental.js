import React from 'react';
import PropTypes from 'prop-types';
import scarecrow from '../scarecrow.jpg'

const Rental = (props) => {

    return (
        <div>
          <img src={scarecrow} alt="Scarecrowz Video" />;
          <p>Select a Video and Customer to Check-out or Check-in a VIDEO!</p>
        </div>
    )
}

Rental.propTypes = {
    video: PropTypes.object,
    customer: PropTypes.object
}

export default Rental;