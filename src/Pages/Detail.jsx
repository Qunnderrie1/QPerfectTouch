import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Data'
const Detail = () => {

  const { id } = useParams();

  return (

    <div className='detailContainer'>
      {
        data.map((item) => {
          if(item.id == id){
            return <div>
                <div className="pageTitleContainer">
               <div className="pageTitleBackgroundCover"></div>
               <div className="pageTextContainer container">
               <h2 className="pageTitle">{item.name}</h2>
              <h5 className="pageSubTitle">Professional Cleaning. Amazing Results. Satisfied Customer.</h5>
        </div>
      </div>
            </div>
          }
        })
      }

      <div className='detailPriceContainer container'>

    
      </div>
    
    </div>
  )
}

export default Detail