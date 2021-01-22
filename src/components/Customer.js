import React from 'react';
import './Customer.css'

const Customer = (props) => {
  const handleClick = () => {
    props.customerCallback(props.data)
    props.activeCallback(props.data.id)
  }

  const date = new Date(props.data.registered_at)
  return (
    <div className={`customer__container ${props.isActive ? 'active' : ''}`} onClick={handleClick} >
      <div className='customer__content' >
        <h2 className='customer__name'>{props.data.name} <small>({props.data.id})</small></h2>
        <hr />
        <p>Customer since {date.toDateString()}</p>
        <p>{props.data.videos_checked_out_count} movie(s) checked out</p>
      </div>
    </div>
  )
}

export default Customer;
