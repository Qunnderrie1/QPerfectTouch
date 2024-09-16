import React from 'react'
import data from '../Data.js'
import ServiceCards from './ServiceCards.jsx'
const Service = () => {
  return (
    <section className='serviceContainer'>

    <div className='serviceContent container'>
    <h3 className='sectionTitle'>DETAILING SERVICES</h3>
    <div className='detailingCardContainer'>
        {
            data ? data.map((item) => {
                return <ServiceCards
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