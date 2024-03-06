import React from 'react'

const TitleCard = ({title , description}) => {
  return (

         <div className='titleContainer'>
           <p>{description}</p>
            <h4>{title}</h4>
        </div>
  )
}

export default TitleCard