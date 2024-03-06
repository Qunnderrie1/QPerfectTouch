import React from 'react'
import car from '../Images/car.jpg'
import{ Link } from 'react-router-dom'
const Header = () => {
  return (
    
    <div className='headerContainer container-fuild'>
        <div className='backgroundCover1'></div>
        <header className='container'>
            <div className='headerTextBtnsContainer'><div>
                <h1 className='headerText'>Discover the Perfect <span>Touch</span></h1>
                <p className='subHeaderText'>Elevate Your Ride with Q Perfect Touch Auto Detailing.</p>
            </div>
            <div className='btnHeaderContainer'>
                <Link to="/makeappointment" >Book Appointment</Link>
            </div>
            </div>
        </header>
       
    </div>
  )
}

export default Header