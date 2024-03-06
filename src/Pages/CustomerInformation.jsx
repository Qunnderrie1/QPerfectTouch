import React, { useState } from 'react'
import TitleCard from '../Components/TitleCard'

const CustomerInformation = () => {
    const [appointmentTime , setAppointmentTime ] = useState("");


    const [customer , setCustomer] = useState( {
        first: "",
        last: "",
        address: "",
        phone: "",
        vehicleYearMakeMode: "",
        vehicleType: "",
        Service: "",
        paymentType: "",
        appointmentTime: "",
        appointmentDate: "",
        notes: ""
        
    })



    const handleDateTime = () => {


    }

    const handleSubmit = (e) => {

        e.preventDefault();

    }

  return (


    <div className='bookingContainer'>
        <div style={{width: "100%" , margin: "0px", padding: "0px"}}>
        <div className='titleBackgroundCover'></div>
        <TitleCard title="Schedule Appointment"  />
        </div>
        <div className='customerContainer '>
            <form onSubmit={handleSubmit} className='container'>
            <p style={{textAlign: "left"}}>Customer Information</p>
            <div className='customerInfo shadow-md'>
                <div style={{ display: "flex" , gap: "20px"}}>
                <div style={{ display: "flex" , gap: "20px",textAlign: "left"}} className='formNameContainer'>
                    <div style={{ display: "flex" , flexDirection: "column"}}>
                    <label style={{ fontSize: "14px", marginBottom: "5px"}} htmlFor="emailaddress">First</label>
                <input type='text' className='form-control'  />
                </div>
                </div>
                <div style={{ display: "flex" , gap: "20px",textAlign: "left"}} className='formNameContainer'>
                    <div style={{ display: "flex" , flexDirection: "column"}}>
                    <label style={{ fontSize: "14px" , marginBottom: "5px"}} htmlFor="emailaddress">Last</label>
                <input type='text' className='form-control' />
                </div>               
                </div>
                </div>
            <div style={{ textAlign: "left"}}>
            <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Address </label>
            <input type='text' className='form-control'  />
            </div> 
            <div style={{ textAlign: "left"}}>
            <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Phone</label>
            <input type='text' className='form-control' />
            </div>
           </div>
           <p style={{textAlign: "left"}}>Vehical Information</p>
            <div className='customerVehicalContainer shadow-md'>
            <div style={{ textAlign: "left", marginTop: "10px"}}>
            <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Vehicle Year, Make & Model</label>
            <input type='text' className='form-control' />
            </div>
            <div style={{ textAlign: "left", marginTop: "20px"}}>
            <select className='form-control'>
                <option selected>Choose Vehicle Type</option>
                <option value="SUV" >SUV</option>
                <option value="CAR" >CAR</option>
                <option value="VAN" >VAN</option>
            </select>
            </div>
            </div>
            <div style={{ textAlign: "left"}}>
            <select className='form-control'>
                <option selected>Choose Your Service</option>
                <option value="Full Interior Detail" >Full Interior Detail $180</option>
                <option value="Seat Shampoo" >Seat Shampoo $100</option>
                <option value="Carpet Shampoo" >Carpet Shampoo $100</option>
                <option value="Basic In & Out" >Basic In & Out $40</option>
            </select>
            </div>
            <div style={{ textAlign: "left"}}>
            <select className='form-control'>
                <option selected>Payment Type</option>
                <option value="Full Interior Detail" >Cash App</option>
                <option value="Seat Shampoo" >Zelle</option>
            </select>
            </div>
            <div className='appointmentdatetime'> 
            <div style={{ textAlign: "left", display: "flex", flexDirection: "column"}}>
                <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Appointment Date </label>
                <input type='date'  />
            </div>
            <div style={{ textAlign: "left", display: "flex", flexDirection: "column"}}>
                <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Appointment Time </label>
                <input onChange={(e) => setAppointmentTime(e.target.value)} value={appointmentTime} type='time' />
            </div>

            </div>
            
            <textarea type='textarea' className='form-control' placeholder='Notes....' />
            <button onClick={handleDateTime} className='contactSubmitBtn'>BOOK APPOINTMENT</button>
            </form>
        </div>
        
                    
    </div>
  )
}

export default CustomerInformation