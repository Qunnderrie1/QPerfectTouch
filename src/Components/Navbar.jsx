import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'




const Navbar = () => {

    const [mobileNav , setMobileNav] = useState(false)

    const { items } = useSelector((state) => state.cart)

    const handleMobileNav = () => {

        if(mobileNav){
            setMobileNav(false)

        }else{
            setMobileNav(true)
           
        }

    }

    const handleLinkClick = () => {
        setMobileNav(false)
    }


  return (

    <nav>
        {/*================== Mobile NavBar  =====================*/}

        <div className='mobileNavContainer'>
            <p>Q Perfect Touch</p>
            <div onClick={handleMobileNav} className='hamburgerMenu'>
                <div className={mobileNav ? "line active" : "line"}></div>
                <div className={mobileNav ? "line active" : "line"}></div>
                <div className='line'></div>
            </div>
        </div>
        <div className={ mobileNav ? "mobileItems active" : "mobileItems"}>
            <div style={{ display:  "flex", flexDirection: "column", gap: "20px"}}>
            <Link onClick={handleLinkClick} to='/QPerfectTouch' >Home</Link>
            <Link onClick={handleLinkClick} to='/QPerfectTouch/services' >Services</Link>
            <Link onClick={handleLinkClick} to='/QPerfectTouch/contact' >Contact</Link>
            <Link onClick={handleLinkClick} to='/QPerfectTouch/about' >About</Link>
            </div>
           
        </div>
      {/*================== Desktop NavBar  =====================*/}
        <div className='navContainer container'>
        <div className='logoContainer'>
            <Link to='/'>Q Perfect Touch</Link>
        </div>
        <div className='nav-items'>
            <Link to='/QPerfectTouch' >Home</Link>
            <Link to='/QPerfectTouch/services' >Services</Link>
            <Link to='/QPerfectTouch/contact' >Contact</Link>
            <Link to='/QPerfectTouch/about' >About</Link>
        </div>
        <div className='cartNavContainer'>
            <Link to='/QPerfectTouch/makeappointment'>Book Appointment</Link>
        </div>
    </div>

    </nav>

  )
}

export default Navbar