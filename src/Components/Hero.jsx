import React, { useEffect } from 'react'
import axios from 'axios'





const Hero = ({title, subTitle}) => {

    useEffect(() => {
        axios.get("/")
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    
    }, [])


  return (
    <div className='heroContainer '>
        <div className='backgroundCover'></div>
            <div className='heroContent container'>
            <h1 className='titleText'>THE <span>MOST RATED</span> MOBILE</h1>
            <h1 className='titleText'>DETAILING <span>COMPANY</span></h1>
            <h1 className='titleText'>IN <span>TOWN</span></h1>
            <p className='subTitleText'>Bringing you  <span>High-Quality</span> cleaning when you book with Q Perfect Mobile Detailing.</p>
            <div className='heroButtonsContainer'>
                <button className='bookBtn'>Book Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default Hero