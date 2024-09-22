import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

const NavBar = () => {
  return (
    <nav>
      <MobileNav />
        <div className='navContainer container'>
          <Link to="/">
          <img src='./Images/QLogo1.png' width="40px" height="40px" alt='Logo' />
          </Link>
            <div className='nav-items'>
                <Link to='/'>HOME</Link>
                <Link to='/services'>SERVICES</Link>
                <Link to='/portfolio'>PORTFOLIO</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
            </div>
            <div className='contactContainer'>
                <Link to='/cart'>
                <FontAwesomeIcon style={{color: 'white' , fontSize: "20px"}} icon={faCartShopping} />
                </Link>
                <div className='cartItemsCountText'><p>0</p></div>
              </div>
        </div>
    </nav>


  )
}

export default NavBar