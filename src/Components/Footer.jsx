import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footerContent container'>
        <h3>Stay In Touch</h3>
        <p>Ready to get the latest news discounts and events from Q Perfect Touch. Sign up to our monthly news letter.</p>
        <form>
          <input placeholder='Email' className='form-control' />
          <button>SUBSCRIBE</button>
        </form>
      </div>
        <p>Copyright 2024 &copy; Q Perfect Touch, All Rights Reserved. Designed and Maintained by Q Tech LLC</p>
    </footer>
  )
}

export default Footer