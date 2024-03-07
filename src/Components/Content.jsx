import React from 'react'
import car from '../Images/car.jpg'
import seat from '../Images/pic5.jpg'
import PackagesCard from './PackagesCard'
import packages from '../Data/PackagesData.js'
import MobileCard from './MobileCard.jsx'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComputer} from '@fortawesome/free-solid-svg-icons'
import {faCar} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

import Stars from './Stars.jsx'
import TestimonyCard from './TestimonyCard.jsx'


const Content = () => {

  return (
    <div className='contentContainer'>
         <div className='headerBottom'>
                    <h3>HIGH-QUALITY CLEANING</h3>
                    <h3>#1 RATING</h3>
                    <h3>500+ CUSTOMERS</h3>
        </div>

        <section className='container'>

        
        <h3 className='sectionsHeaderText'>Why Choose Us?</h3>
        <section className='aboutContainer container'>
            <div className='aboutContent'>
            <p>At Q Perfect Touch, we pride oursleves on setting the standards for high-quality auto detailing. Our unwavering commitment to excellence ensures that every vehicle we touch recevices meticulous attention to detail, tranforming it into a masterpiece on wheels. With a passion for perfection and a dedication to customer satisfaction, our team of skilled professional utilizes state-of-the-art techniques and premuim products to achieve impeccable results.</p>
            </div>
        </section>


        <h3 className='sectionsHeaderText'>Our Work</h3>
        <section className='photoSection'>

        <div className='photoContainer container'>
                <img src={car} width="300px" />
                <img src={car} width="300px" />
                <img src={car} width="300px" />
                <img src={car} width="300px" />
        </div>

        </section>

        
        <h3 className='sectionsHeaderText'>Our Services</h3>
        <section className='packagesSection '>
        <div className='packageContainerMain container'>
            {
                packages.map((item) => {
                    return <PackagesCard title={item.title} serviceItems={item.serviceItems} price={`Starting At\t$${item.price}.00`}   />
                })
            }
        </div>
        </section>
       


        



        <h3 className='sectionsHeaderText'>Testimony</h3>
        <section>
        <div className='testimonyContainer'>
            <TestimonyCard name="John Jones" testimony="I love how my car looks!! OMG" />
            <TestimonyCard name="Kelly Bryant" testimony="He was on time and shampoo my seats and carpet. They are sooooo clean!" />
            <TestimonyCard name="Ashley Jordan" testimony="I will be doing service with him again!!" />
            <TestimonyCard name="Mary Long" testimony="I am a very satisfied customer!!!" />
        </div>
        </section>

        </section>


    </div>
    
  )
}

export default Content