import React from 'react'
import { useParams } from 'react-router-dom'
import QuoteForm from './QuoteForm.jsx'
import Service from './Service.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import SectionDivier from './SectionDivier.jsx';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';



const Content = () => {

  const { id } = useParams();


  return (
    <div className='contentContainer'>
      <SectionDivier />

        {/*----------------- Service Section ------------- */}
        <Service />
        <SectionDivier />
        {/*----------------- How Booking Works Section ------------- */}

          
       <section className='howBookingWorksContainer'>

            <div className='howBookingWorks container'>
            <h3 className='sectionTitle'>How Booking With Us Works </h3>
            <p className='sectionSubTitle'>Simple Steps to Secure Your Mobile Detailing Appointment</p>

            <div className='h-b-1-container'>
            <div className='h-b-1'>
              <FontAwesomeIcon icon={faCalendar} style={{fontSize: "32px"}} />
              <p style={{ margin: "40px 0px", fontSize: "20px" }}>Booking Appointment</p>
              <p style={{ marginTop: "20px", fontSize: "16px"}}> Use our online booking system or give us a call to choose a time that suits you.</p>
            </div>
            <div className='h-b-1'>
              <FontAwesomeIcon icon={faCar} style={{fontSize: "32px"}} />
              <p style={{ margin: "40px 0px", fontSize: "20px" }}>We Come To You</p>
              <p style={{ marginTop: "20px", fontSize: "16px"}}>Our team travels to your location—home, office, or anywhere you prefer.</p>
            </div>
            <div className='h-b-1'>
              <FontAwesomeIcon icon={faThumbsUp} style={{fontSize: "32px"}} />
              <p style={{ margin: "40px 0px", fontSize: "20px" }}>Satisfied Customer</p>
              <p style={{ marginTop: "40px", fontSize: "16px"}}> We provide top-notch detailing services on-site, ensuring your vehicle looks its best.</p>
            </div>
            </div>
            </div>

        </section>
        <SectionDivier />

        {/*----------------- Service Section ------------- */}

         <section className='whyChooseUsContainer'>

            <div className='whyChooseUs container'>
            <h3 className='sectionTitle'>Why Choose Us?</h3>
            <p className='sectionSubTitle'>Discover the Benefits of Choosing Our Mobile Detailing Services.</p>
            <p className='whyChooseUsText'>At our mobile detailing service, we prioritize both quality and convenience. We offer comprehensive services including seat shampoo, carpet shampoo, full interior detailing, and basic interior and exterior cleaning—all tailored to leave your vehicle spotless and refreshed. What sets us apart is that we come to you, saving you time and hassle. Whether you’re at home or the office, we bring professional-grade tools and eco-friendly products right to your location, ensuring exceptional results without disrupting your day. Choose us for a convenient, thorough, and reliable detailing experience.</p>
            </div>

        </section>
        <SectionDivier />
        
        <section className='sectionQuoteContainer'>
        <QuoteForm />
        </section>
 
    </div>
  )
}

export default Content