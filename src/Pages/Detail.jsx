import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Data'
import seat from '../Images/seats1.jpg'
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

      <div className='detailPriceContainer'>
        {
          data.map((item) => {
            if(item.id == id){
              return <div>
                <h3 className='detailPriceText'>{item.name} Package - Price ${item.price}</h3>
                   </div>
            }
          })
        }

        <div className='detailContent container'>
          <div className='detailImgContainer'>
          <img src={seat} width="600px"></img>
          </div>
          <div className='detailDescriptionContainer'>
            {
              data.map((item) => {
                if(item.id == id){
                  return <div className='descriptionContent'>
                    <p className='detailDescriptionTitle'>{item.name}</p>
                    <hr />
                    <p>{item.description}</p>
                    <button className='detailBookNowBtn'>Book Now!</button>
                       </div>
                }
              })
            }
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Detail