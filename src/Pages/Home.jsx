import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Content from '../Components/Content';
import '../App.css'


const Home = () => {
  return (
    <div className='homeContainer container-fluid'>
      <Header />
      <Content />
    </div>
  )
}

export default Home