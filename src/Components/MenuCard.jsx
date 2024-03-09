import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MenuCard = ({id, title, description, price, img}) => {

  const navigate = useNavigate();



const handleMenu = (id) => {
  navigate(`service/${id}`)
}


  return (
    <div onClick={() => handleMenu(id)} className='servicesContent'>
    <img src={img}  />
    <h3>{title}</h3>
    <p>{description}</p>

    <p style={{ textAlign: "end"}}>Starting At ${price} </p>
  </div>
  )
}

export default MenuCard