import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const MobileNav = () => {

    const [isOpen , setIsOpen] = useState(false)


    const handleMobileNav = () => {

        if(isOpen){
            setIsOpen(false)
           
        }else{
            setIsOpen(true)
        }
  

    }

    useEffect(()=>{
        console.log(isOpen)
    },[isOpen])
  return (

    <div className='mobileNavContainer'>
        <div className='menuBarContainer' onClick={handleMobileNav}>
            <div className={isOpen ? 'line1 active' : 'line1'}></div>
            <div className={isOpen ? 'line2 active' : 'line2'}></div>
            <div className={isOpen ? 'line3 active' : 'line3'}></div>
            <div className='cartNavContainer'>
                <Link to='/cart'>
                <FontAwesomeIcon style={{color: 'white' , fontSize: "20px"}} icon={faCartShopping} />
                </Link>
                <div className='cartItemsCountText'><p>0</p></div>
            </div>
        </div>
      
        <div className={isOpen ? 'mobileNavMenuItems active' : 'mobileNavMenuItems'}>
                <Link onClick={() => setIsOpen(false)}  to='/'>HOME</Link>
                <Link onClick={() => setIsOpen(false)} to='/services'>SERVICES</Link>
                <Link onClick={() => setIsOpen(false)} to='/portfolio'>PORTFOLIO</Link>
                <Link onClick={() => setIsOpen(false)} to='/about'>ABOUT</Link>
                <Link onClick={() => setIsOpen(false)} to='/contact'>CONTACT</Link>
                <button style={{marginTop:"20px"}} className='quoteBtn'>GET A QUOTE</button>
                <button style={{marginTop:"20px"}} className='bookBtn'>BOOK APPOINTMENT</button>
        </div>
    </div>
  )
}

export default MobileNav