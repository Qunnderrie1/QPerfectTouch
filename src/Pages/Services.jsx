import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import TitleCard from '../Components/TitleCard'
import services from '../Data/ServicesData'

const Services = () => {
  return (
    <div className='servicesContainer'>
        <div className='servicesCardSection container'>
          <h3 className='serviceTitle'>Service Menu</h3>
          <div className='fullInteriorContainer'>
            <h3>Full Interior Detail</h3>
            <hr />
            <p>Experience the ultimate in automotive care with Q Perfect Touch's Full Interior Detailing. Our comprehensive service includes expert seat and carpet shampooing to eliminate stains and odors, thorough interior cleaning to remove dust and grime, and a complimentary car wash to leave your vehicle sparking inside and out.</p>
            <p style={{ textAlign: "end"}}>Starting At $160 | 2hrs</p>
          </div>
          <div className='seatShampooContainer'>
          <h3>Seat Shampoo</h3>
          <hr />
            <p>Experience the ultimate in automotive care with Q Perfect Touch's Full Interior Detailing. Our comprehensive service includes expert seat and carpet shampooing to eliminate stains and odors, thorough interior cleaning to remove dust and grime, and a complimentary car wash to leave your vehicle sparking inside and out.</p>
            <p style={{ textAlign: "end"}}>Starting At $100 | 1hr</p>

          </div>
          <div className='carpetshampooContainer'>
          <h3>Carpet Shampoo</h3>
          <hr />
            <p>Experience the ultimate in automotive care with Q Perfect Touch's Full Interior Detailing. Our comprehensive service includes expert seat and carpet shampooing to eliminate stains and odors, thorough interior cleaning to remove dust and grime, and a complimentary car wash to leave your vehicle sparking inside and out.</p>
            <p style={{ textAlign: "end"}}>Starting At $100 | 1hr</p>

          </div>
          <div className='BasicInOutContainer'>
          <h3>Basic In & Out</h3>
          <hr />
            <p>Experience the ultimate in automotive care with Q Perfect Touch's Full Interior Detailing. Our comprehensive service includes expert seat and carpet shampooing to eliminate stains and odors, thorough interior cleaning to remove dust and grime, and a complimentary car wash to leave your vehicle sparking inside and out.</p>
            <p style={{ textAlign: "end"}}>Starting At $40 | 45min</p>

          </div>


        </div>
    </div>
  )
}

export default Services