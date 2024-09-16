import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Data'

const Detail = () => {

  const { id } = useParams();

  return (

    <div>
      {
        data.map((item) => {
          if(item.id == id){
            return <div>
              <h1>Service: {item.name}</h1>
            </div>
          }
        })
      }
    
    </div>
  )
}

export default Detail