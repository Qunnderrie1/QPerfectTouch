import React from 'react'
import data from '../Data.js'
import ServiceCards from './ServiceCards.jsx'
const Service = () => {
  return (
    <section className='serviceContainer'>

    <div className='serviceContent container'>
    <h3 className='sectionTitle'>Our Most Featured Services</h3>
    <p className='sectionSubTitle'>Select from Our Range of Detailing Services Below</p>
    <div className='detailingCardContainer'>
        {
            data ? data.map((item) => {
                return <ServiceCards
                 img={item.img}
                 id={item.id}
                 title={item.name}
                 description={item.description}
                 price={item.price}
                  />
            }) : <p>No Services</p>
        }
    </div>
    </div>

</section>
  )
}

export default Service