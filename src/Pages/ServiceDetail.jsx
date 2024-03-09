import React from 'react'
import {useParams} from 'react-router-dom'

const ServiceDetail = () => {


    let { id } = useParams();

  return (
    <div style={{marginTop: "100px"}}>
        <h1 style={{marginTop: "100px"}}>{id}</h1>
        <h1 style={{marginTop: "100px"}}>Hello World</h1>
    </div>
  )
}

export default ServiceDetail