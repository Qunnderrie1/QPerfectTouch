import React from 'react'
import MenuCard from '../Components/MenuCard'
import serviceMenuItems from '../Data/ServicesData'
import services from '../Data/ServicesData'
const Services = () => {
  return (
    <div className='servicesContainer'>
        <div className='servicesCardSection container'>
          <h3 className='serviceTitle'>Service Menu</h3>
          <hr />
          <div className='serviceMenuItems container'>
            {
              services.map((item) => {
                return <MenuCard title={item.title} description={item.description} price={item.price} img={item.img} />
              })
            }
        </div>


        </div>
    </div>
  )
}

export default Services