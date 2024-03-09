import React, { useEffect, useState } from 'react'
import MenuCard from '../Components/MenuCard'
import services from '../Data/ServicesData'




 const BookAppointment = () => {

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


    const handleCustomer = (e) => {
        
        const { name , value } = e.target

        setCustomer((prev) => {
            return {
                ...prev, [name] : value
            };
        })
    }


    const handleSubmit = (e) => {

        e.preventDefault();

    }

  return (


    <div className='bookingContainer container'>
       <div className='servicesContainer'>
        <div className='servicesCardSection container'>
          <h3 className='serviceTitle'>Service Menu</h3>
          <p style={{fontSize:"20px"}}>Get started by choosing one of the services below.</p>
          <hr />
          <div className='serviceMenuItems container'>
            {
              services.map((item) => {
                return <MenuCard id={item.id} title={item.title} description={item.description} price={item.price} img={item.img} />
              })
            }
        </div>


        </div>
    </div>
    </div>
  )
}

export default BookAppointment