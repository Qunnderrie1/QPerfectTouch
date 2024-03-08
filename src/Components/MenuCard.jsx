import React from 'react'


const MenuCard = ({title, description, price, img}) => {
  return (
    <div className='servicesContent'>
    <img src={img}  />
    <h3>{title}</h3>
    <p>{description}</p>
    {
        console.log(img)
    }
    <p style={{ textAlign: "end"}}>Starting At ${price} </p>
  </div>
  )
}

export default MenuCard