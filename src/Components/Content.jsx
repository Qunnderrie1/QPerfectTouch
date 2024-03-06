import React from 'react'
import car from '../Images/car.jpg'
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
        
        <h3 className='sectionsHeaderText'>HIGH-QUALITY AUTO DETAILING</h3>
        <section className='aboutContainer container'>
            <div className='aboutContent'>
            <p>At Q Perfect Touch, we pride oursleves on setting the standards for high-quality auto detailing. Our unwavering commitment to excellence ensures that every vehicle we touch recevices meticulous attention to detail, tranforming it into a masterpiece on wheels. With a passion for perfection and a dedication to customer satisfaction, our team of skilled professional utilizes state-of-the-art techniques and premuim products to achieve impeccable results.</p>
            <Link to="/contact">Get A Quote</Link>
            </div>
            <img src={car}  />
        </section>


        <h3 className='sectionsHeaderText'>OUR WORK</h3>
        <section className='howWeWorkSection container-fluid'>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
     <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={car} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={car} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={car} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </section>

        <h3 className='sectionsHeaderText'>TESTIMONY</h3>
        <div className='testimonyContainer'>
            <TestimonyCard name="John Jones" testimony="I love how my car looks!! OMG" />
            <TestimonyCard name="Kelly Bryant" testimony="He was on time and shampoo my seats and carpet. They are sooooo clean!" />
            <TestimonyCard name="Ashley Jordan" testimony="I will be doing service with him again!!" />
            <TestimonyCard name="Mary Long" testimony="I am a very satisfied customer!!!" />
        </div>


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
       

    </div>
    
  )
}

export default Content