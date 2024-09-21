import React from 'react'
import QuoteForm from '../Components/QuoteForm'
const Contact = () => {
  return (
    <div>
         <div className="pageTitleContainer">
        <div className="pageTitleBackgroundCover"></div>
        <div className="pageTextContainer container">
          <h2 className="pageTitle">Contact Us</h2>
          <h3 className="pageSubTitle">We Would Love Your Feedback On How We Are Doing</h3>
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