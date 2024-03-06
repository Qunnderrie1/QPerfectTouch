import React from 'react'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Stars = () => {
  return (
    <div className='customerStars'>
    <FontAwesomeIcon icon={faStar} style={{ color: "orange"}} />
    <FontAwesomeIcon icon={faStar} style={{ color: "orange"}} />
    <FontAwesomeIcon icon={faStar} style={{ color: "orange"}} />
    <FontAwesomeIcon icon={faStar} style={{ color: "orange"}} />
    <FontAwesomeIcon icon={faStar} style={{ color: "orange"}} />
</div>
  )
}

export default Stars