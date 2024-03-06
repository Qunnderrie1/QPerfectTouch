import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartCard from '../Components/CartCard';
import TitleCard from '../Components/TitleCard';



const Cart = () => {

const dispatch = useDispatch();

const { items } = useSelector((state) => state.cart)

  return (
    <div className='cartContainer'>
        <div className='titleBackgroundCover'></div>
        <TitleCard title="Cart"/>
        <div className='checkout container'>
            <h2 style={{ textAlign: "left", marginTop: "40px"}}>Your Cart</h2>
            <hr />
            {
                items.length > 0 ? items.map((item) => {
                    return <CartCard title={item.title} duration={item.duration} price={item.price} id={item.id} />
                }) : <p>You have nothing in your cart.</p>
            } 
            <hr />
            <p style={{textAlign:"end", fontWeight: "700"}}>SubTotal:$0.00</p>
            <div className='checkBtn'>
            <button className='checkOutBtn'>Checkout</button>

            </div>
        </div>

        {
            console.log(items)
        }
    
    </div>
  )
}

export default Cart