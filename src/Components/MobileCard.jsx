import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileCard = ({icon}) => {
  return (
    <div className='mobileContainer container'>
        <div className='mobilePicContainer'>
            <FontAwesomeIcon style={{ fontSize: "60px"}} icon={icon} />
        </div>
        <div className='mobileDescriptionContainer'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit sit magni perferendis ratione quam debitis exercitationem blanditiis doloribus dolore, pariatur necessitatibus quidem a officiis minus et odit distinctio qui.</p>
        </div>

    </div>
  )
}

export default MobileCard