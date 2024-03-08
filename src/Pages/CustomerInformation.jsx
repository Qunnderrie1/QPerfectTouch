import React, { useEffect, useState } from 'react'
import TitleCard from '../Components/TitleCard'

const CustomerInformation = () => {

    const [count , setCount] = useState(0);
    const [titleName , setTitleName] = useState("Customer Information")

    const [appointmentTime, setAppointmentTime] = useState("")


    const [customer , setCustomer] = useState( {
        first: "",
        last: "",
        address: "",
        phone: "",
        vehicleType: "",
        Service: "",
        paymentType: "",
        appointmentTime: "",
        appointmentDate: "",
        notes: ""
        
    })

    const handleSteps = () => {
        setCount(count + 1)

        switch(count){
            case 0:
                setTitleName("Vehicle Information")
                break;


            case 1:
                setTitleName("Choose Service")
    
                break;


            case 2:
                setTitleName("Appointment Date & Time")
                 break;

            
        }

        if(count == 4 ) {
            setCount(1)
        }

    }


    const handleCustomer = (e) => {


        const { name , value } = e.target
        setCustomer(prevData => ({...prevData,  [name] : value}))

        console.log(customer)
    }


    const handleSubmit = (e) => {

        e.preventDefault();

    }

  return (


    <div className='bookingContainer container'>
        <div style={{width: "100%" , padding: "0px"}}>
            <p className="customerTitle" style={{marginTop: "180px", fontSize: "34px", }}>{titleName}</p>
        </div>
        <div className='customerContainer container '>
            <form onSubmit={handleSubmit} className='bookForm container'>

            <div className={count == 0 ? "customerInfo active" : "customerInfo"}>
                <div style={{ display: "flex" , gap: "20px"}}>
                <div style={{ display: "flex" , gap: "20px",textAlign: "left"}} className='formNameContainer'>
                    <div style={{ display: "flex" , flexDirection: "column"}}>
                    <label style={{ fontSize: "14px", marginBottom: "5px"}} htmlFor="emailaddress">First</label>
                <input type='text' className='form-control' onChange={handleCustomer} value={customer.first}    />
                </div>
                </div>
                <div style={{ display: "flex" , gap: "20px",textAlign: "left"}} className='formNameContainer'>
                    <div style={{ display: "flex" , flexDirection: "column"}}>
                    <label style={{ fontSize: "14px" , marginBottom: "5px"}} htmlFor="emailaddress">Last</label>
                <input type='text' className='form-control' value={customer.last} />
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

           <section className={count == 1 ? "vehicleContainer active container" : "vehicleContainer"}>
            <div className='customerVehicalContainer container shadow-md'>
            <div style={{ textAlign: "left", marginTop: "20px"}}>
            <select className='form-control'>
                <option selected>Choose Vehicle Type</option>
                <option value="SUV" >SUV</option>
                <option value="CAR" >CAR</option>
                <option value="VAN" >VAN</option>
            </select>
            </div>
            </div>
           </section>


            <section className={count == 2 ? "chooseServiceSection active": "chooseServiceSection"}>
           <div style={{ textAlign: "left"}}>
            <select className='form-control'>
                <option selected>Choose Your Service</option>
                <option value="Full Interior Detail" >Full Interior Detail $180 | 2hrs</option>
                <option value="Seat Shampoo" >Seat Shampoo $100 | 1hr</option>
                <option value="Carpet Shampoo" >Carpet Shampoo $100 | 1hr</option>
                <option value="Basic In & Out" >Basic In & Out $40 | 1hr</option>
            </select>
            </div>
            </section>

{/* 
            <section className={count == 2 ? "serviceOptionSection active" : "serviceOptionSection"}>
            <div style={{ textAlign: "left"}}>
            <select className='form-control'>
                <option selected>Payment Type</option>
                <option value="Full Interior Detail" >Cash App</option>
                <option value="Seat Shampoo" >Zelle</option>
            </select>
            </div>

            </section> */}

            <section className={count == 3 ?  "appointmentDateTimeSection active" : "appointmentDateTimeSection"}>
            <div  style={{ textAlign: "left", display: "flex", flexDirection: "column"}}>
                <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Appointment Date </label>
                <input type='date'  />
            </div>
            </section>

        <section className={count == 3 ?  "appointmentDateTimeSection active" : "appointmentDateTimeSection"}>
        <div style={{ textAlign: "left", display: "flex", flexDirection: "column"}}>
                <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Appointment Time </label>
                <select>
                    <option>9:00am - 11:00am</option>
                    <option>12:00am - 1:00am</option>
                    <option>3:00am - 5:00am</option>
                </select>            
            </div>


        </section>
 


            {/* <textarea type='textarea' className='form-control' placeholder='Notes....' />  */}
            <button onClick={handleSteps}  className='contactSubmitBtn'>NEXT</button>
            </form>
        </div>
        
                    
    </div>
  )
}

export default CustomerInformation