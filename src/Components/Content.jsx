import React from 'react'
import { useParams } from 'react-router-dom'
import QuoteForm from './QuoteForm.jsx'
import Service from './Service.jsx';


const Content = () => {

  const { id } = useParams();


  return (
    <div className='contentContainer container'>


        {/*----------------- Service Section ------------- */}
        <Service />
        <hr />
        {/*----------------- How Booking Works Section ------------- */}

          
       <section className='howBookingWorksContainer'>

            <div className='howBookingWorks container'>
            <h3 className='sectionTitle'>HOW BOOKING WITH US WORKS </h3>
            </div>

        </section>

        {/*----------------- Service Section ------------- */}

         <section className='whyChooseUsContainer'>

            <div className='whyChooseUs container'>
            <h3 className='sectionTitle'>WHY CHOOSE US?</h3>
            <p className='whyChooseUsText'>At our mobile detailing service, we prioritize both quality and convenience. We offer comprehensive services including seat shampoo, carpet shampoo, full interior detailing, and basic interior and exterior cleaning—all tailored to leave your vehicle spotless and refreshed. What sets us apart is that we come to you, saving you time and hassle. Whether you’re at home or the office, we bring professional-grade tools and eco-friendly products right to your location, ensuring exceptional results without disrupting your day. Choose us for a convenient, thorough, and reliable detailing experience.</p>
            </div>

        </section>

        <QuoteForm />
 
    </div>
  )
}

export default Content