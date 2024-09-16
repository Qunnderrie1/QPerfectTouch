import React from 'react'
import { Link, redirect,Navigate, useNavigate } from 'react-router-dom'




const ServiceCards = ({title, id}) => {

  const navigate = useNavigate();

  return (
    <div className='card' onClick={() => navigate(`/service/${id}`)}>
    <div className='backgroundCardCover'></div>
    <div className='card-body container'>
        <div className='serviceCardLine'></div>
    <p className='cardTitleText'>{title}</p>
    <p style={{textAlign: "left"}}>Explore Service</p>
    </div>
</div>
  )
}

export default ServiceCards