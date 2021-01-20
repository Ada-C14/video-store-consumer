import React from 'react';

const Customer = (props) => {
  const handleClick = () => {
    props.customerCallback(props.data)
  }
  return (
    <div>
      <div className='customer__content'>
        <h2 className='customer__name'>{props.data.name}</h2>
      </div>
      <button className='customer__select' onClick={handleClick}>Select</button>
    </div>
  )
}

export default Customer;