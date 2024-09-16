import React from 'react'

const QuoteForm = () => {

    
  const handleSubmit = (e) => {

    e.preventDefault();

  }
  return (
    <section className='quoteContainer'>

    <div className='quoteForm container'>
    <h3 className='sectionTitle'>GET A QUOTE</h3>

    <form onSubmit={handleSubmit}>
      <input className='form-control' name='vehileInfo' placeholder='Vehicle (Make / Model / Year '  />
      <input className='form-control' name='customerName' placeholder='Name '  />
      <input className='form-control' name='customerEmail' placeholder='Email '  />
      <input className='form-control' name='cutsomerPhoneNumber' placeholder='Phone Number '  />
      <input className='form-control' name='customerServiceRequest' placeholder='What Service Do You Want Quoted?'  />
      <textarea className='form-control' name='customerMessage' placeholder='Message'  />
      <button className='quoteBtn'>Send</button>
      

    </form>
    </div>

</section>
  )
}

export default QuoteForm