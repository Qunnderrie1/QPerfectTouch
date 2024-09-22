import React from 'react'
import { Link, redirect,Navigate, useNavigate } from 'react-router-dom'


const ServiceCards = ({title, id, img, price, altText}) => {


  const navigate = useNavigate();

  return (
    <div className='card'>
    <img className='card-img'  src={img}  alt={`${altText} image`} />
    <div className='card-body'>
      <p className='cardTitleText'>{title}</p>
      <p className=''>Starting At ${price}</p>
      <div className='card-footer'>
      <button onClick={() => navigate(`/detail/${id}`)}>Learn More</button>
      </div>
    </div>
</div>

  )
}

export default ServiceCards