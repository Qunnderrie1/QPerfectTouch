import React from 'react'
import car from '../Images/carpic7.jpg'
const MenuCard = ({title, description, price}) => {
  return (
    <div className='servicesContent'>
    <img src={car}  />
    <h3>{title}</h3>
    <p>{description}</p>
    <p style={{ textAlign: "end"}}>Starting At ${price} </p>
  </div>
  )
}

export default MenuCard