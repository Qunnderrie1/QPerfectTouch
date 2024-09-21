import React from 'react'
import { Link, redirect,Navigate, useNavigate } from 'react-router-dom'




const ServiceCards = ({title, id, img}) => {

  const navigate = useNavigate();

  return (
    <div className='card' onClick={() => navigate(`/service/${id}`)}>
      <img src={img} width="400px" />
    <div className='backgroundCardCover'></div>
    <div className='card-body container'>
        <div className='serviceCardLine'></div>
    <p className='cardTitleText'>{title}</p>
    <p style={{textAlign: "left", fontWeight: "lighter"}}>Explore Service</p>
    </div>
</div>
  )
}

export default ServiceCards