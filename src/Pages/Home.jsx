import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Content from '../Components/Content'

const Home = () => {
  return (
    <div>
        <div className='navHeroContainer'>
         <Hero  />
        </div>
        <Content />
    </div>
  )
}

export default Home