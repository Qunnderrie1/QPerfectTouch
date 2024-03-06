import React from 'react'
import car  from '../Images/car.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


const CartCard = ({id ,title , duration , description, price}) => {

    const handleItemRemove = (id) => {

        console.log(id)
        console.log("Remove Item")

    }

  return (

    <div className='cartCardContainer'>
        <div className='cartCardImgContainer'>
            <img src={car} width="100px" />
            <div className='titleCartCardContainer'>
                <div>
                <p>{title}</p>
                <p><FontAwesomeIcon icon={faClock} /> {duration}</p>
                </div>
                <div className='cartCardBottom'>
                <button onClick={() => handleItemRemove(id)} className='removeItemBtn'>Remove</button>
                <p className='priceText'>${price}.00</p> 
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default CartCard