import React, { useState } from 'react'
import axios from 'axios'

const QuoteForm = () => {

  const [vehicle , setVehicle] = useState("")
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [phone , setPhone] = useState("")
  const [service , setService] = useState("")
  const [message , setMessage] = useState("")


  const getQuote = () => {
    
    axios.post("/booking" , {
      vehicle: vehicle,
      Name: name,
      Phone: phone,
      Service: service,
      Message: message
    } )

  }
    
  const handleSubmit = (e) => {

    e.preventDefault()

  }


  return (
    <section className='quoteContainer'>

    <div className='quoteForm container'>
    <h3 className='sectionTitle'>GET A QUOTE</h3>
    <p className='sectionSubTitle'>Fill Out The Form Below To Get Your Quote Today.</p>

    <form method='POST' onSubmit={handleSubmit}>
      <input onChange={(e) => setVehicle(e.target.value)} className='form-control' name='vehileInfo' placeholder='Vehicle (Make / Model / Year '  />
      <input onChange={(e) => setName(e.target.value)} className='form-control' name='customerName' placeholder='Name '  />
      <input onChange={(e) => setEmail(e.target.value)} className='form-control' name='customerEmail' placeholder='Email '  />
      <input onChange={(e) => setPhone(e.target.value)} className='form-control' name='cutsomerPhoneNumber' placeholder='Phone Number '  />
      <input onChange={(e) => setService(e.target.value)} className='form-control' name='customerServiceRequest' placeholder='What Service Do You Want Quoted?'  />
      <textarea onChange={(e) => setMessage(e.target.value)} className='form-control' name='customerMessage' placeholder='Message'  />
      <button onClick={getQuote} className='quoteBtn'>Send</button>
      

    </form>
    </div>

</section>
  )
}

export default QuoteForm