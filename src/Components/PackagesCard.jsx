import React, { useState } from 'react'
import check from '../Images/checkIcon.png'
import { useNavigate } from 'react-router-dom'

const PackagesCard = ({title ,serviceItems, price}) => {

  const [showDetails , setShowDetails ] = useState(false)
  const [openShowPrices , setShowOpenPrices ] = useState(false)

  const navigate = useNavigate();




const handleDetails = () => {

  if(showDetails){
    setShowDetails(false)
  }else{
    setShowDetails(true)
  }

}

const handlePrices = () => {

  if(openShowPrices){
    setShowOpenPrices(false)
  }else{
    setShowOpenPrices(true)
  }

}

const handleBook = () => {
  navigate("/makeappointment")
}




  return (


    <div className='packageCardMain'>
      <div className='backgroundCoverPackageCard'></div>
    <div className='packageCard'>
        <div className='packageCardTitle'>
        <p className='packageHeaderText'>{title}</p>
        </div>
    <div className='packageCardBodyMain'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas natus praesentium optio in, errors!</p>
      <div className='packageCardBody'>
      <p>SERVICES INCLUDED</p>
      <div onClick={handleDetails} className='openDetails'>
        <div className={showDetails ? "detail-line1 active" : "detail-line1"}></div>
        <div className={openShowPrices ? "detail-line2 active" : "detail-line2"}></div>
      </div>
      </div>
      <div className={showDetails ? "serviceList active" : "serviceList"}>
        <ul>
          {
            serviceItems.map((item) => {
              return <li style={{listStyle:"none"}}>{item}</li>
            })
          }
        </ul>
      </div>
      <div className='packageCardBody'>
      <p>SERVICE PRICES</p>
      <div onClick={handlePrices} className='openDetails'>
        <div className={openShowPrices ? "detail-line1 active" : "detail-line1"}></div>
        <div className={openShowPrices ? "detail-line2 active" : "detail-line2"}></div>
      </div>

      </div>
      <div className={openShowPrices ? "serviceList active" : "serviceList"}>
        <ul>
          <li style={{listStyle:"none"}}>{price}</li>
        </ul>
      </div>
    
            
    </div>
</div>
<button onClick={handleBook} className='learnMoreBtn'>Book Appointment</button>
</div>
  )
}

export default PackagesCard