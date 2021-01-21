import React from 'react';
import './Rental.css';
import propTypes from 'prop-types';

export default function Rental({movie, customer, rentMovie}) {
    return (
        <div>
            { movie && <p>selected movie: { movie.title }, { movie.release_date }</p> }
            { customer && <p>selected customer: { customer.name } </p> }
            { (movie && customer) && <button onClick={() => { rentMovie()}}>Rent Movie</button> }
        </div>
    )

}
