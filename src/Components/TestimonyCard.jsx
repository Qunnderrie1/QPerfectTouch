import React from 'react'
import Stars from './Stars'

const TestimonyCard = ({name, testimony}) => {
  return (
    <div className='testimonyCustomerContainer shadow-lg'>
    <div className='testimonyTitleContainer'>
    <i><p>{name}</p></i>
    <Stars />
    </div>
    <i><p>{testimony}</p></i>
</div>
  )
}

export default TestimonyCard