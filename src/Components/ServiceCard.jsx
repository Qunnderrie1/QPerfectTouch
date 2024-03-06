import React from 'react'
import {Link } from 'react-router-dom'
import car from '../Images/car.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import { getItems , removeItems , addItems} from '../Slices/CartSlice'
import { useSelector, useDispatch } from 'react-redux'

const ServiceCard = ({title , description, duration , price}) => {

    const dispatch = useDispatch();

    const { items } = useSelector((state) => state.cart)

  return (
    <div className='serviceCardContainer'>
        <div className='card shadow-lg'>
        <div className='card-title'>
        <div className='backgroundCover'></div>
            <img src={car} style={{ width: "250px"}}/>
            <p>{title}</p>
        </div>
        <div className='card-body'>
            <p>{description}</p>
            <div className='durationContainer'>
                <FontAwesomeIcon icon={faClock} />
                <p>{duration}</p>
            </div>
        </div>
        <div className='card-bottom'>
           {
            // items.filter((item) => console.log(item.title))
              <button  onClick={() => dispatch(addItems({title , price, duration, description}))} className='bookBtn'>Book Appointment</button>   
           } 

           {
            items.filter((item) => console.log(item.title == title))
            
           }
        </div>

        </div>
      {
        console.log(items)
        
      }
    
    </div>
  )
}

export default ServiceCard