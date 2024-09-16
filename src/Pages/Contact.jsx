import React from 'react'
import QuoteForm from '../Components/QuoteForm'
const Contact = () => {
  return (
    <div>
         <div className="pageTitleContainer">
        <div className="pageTitleBackgroundCover"></div>
        <div className="pageTextContainer container">
          <h2>Q PERFECT MOBILE DETAILING</h2>
          <h3>CONTACT US</h3>
        </div>
      </div>
      <div className='locationContainer container'>
        {/* <div className='locationContainer'>
        <p>Our Location</p>
        </div> */}
        <QuoteForm />
      </div>
    </div>
  )
}

export default Contact