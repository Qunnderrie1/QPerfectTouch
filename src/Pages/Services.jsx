import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import TitleCard from '../Components/TitleCard'
import services from '../Data/ServicesData'
import car from '../Images/carpic7.jpg'
import MenuCard from '../Components/MenuCard'

const Services = () => {
  return (
    <div className='servicesContainer'>
        <div className='servicesCardSection container'>
          <h3 className='serviceTitle'>Service Menu</h3>
          <div className='serviceMenuItems container'>
            <MenuCard title="Full Interior Detail" description="" price="150" />
            <MenuCard title="Seat Shampoo" price="100"  />
            <MenuCard title="Carpet Shampoo" price="100"  />
            <MenuCard  title="Car Wash" price="40" />
            <MenuCard  title="Basic In & Out" price="25" />
        </div>


        </div>
    </div>
  )
}

export default Services