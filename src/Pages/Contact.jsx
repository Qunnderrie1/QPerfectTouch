import React from 'react'
import TitleCard from '../Components/TitleCard'
const Contact = () => {
  return (
    <div className='contactContainer container-fluid'>
        <div className='titleBackgroundCover'></div>
        <TitleCard title="Contact"   />
        <div>
         <h3 className='sectionsHeaderText'>Get Your Personalized Quote Today!</h3>
         <p>Discover The Perfect Touch For Your Vehicle With A Customized Quote.</p>
        <section className='contactUsSection container'>
            <form>
                <div style={{ display: "flex" , gap: "20px"}}>
                <div style={{ display: "flex" , gap: "20px",textAlign: "left"}} className='formNameContainer'>
                    <div style={{ display: "flex" , flexDirection: "column"}}>
                    <label style={{ fontSize: "14px", marginBottom: "5px"}} htmlFor="emailaddress">First</label>
                <input type='text' className='form-control'  />
                </div>
                
                </div>
                <div style={{ display: "flex" , gap: "20px",textAlign: "left"}} className='formNameContainer'>
                    <div style={{ display: "flex" , flexDirection: "column"}}>
                    <label style={{ fontSize: "14px" , marginBottom: "5px"}} htmlFor="emailaddress">Last</label>
                <input type='text' className='form-control' />
                </div>
                
                </div>
                </div>
            <div style={{ textAlign: "left"}}>
            <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Email Address (required)</label>
            <input type='text' className='form-control'  />
            </div>
            <div style={{ textAlign: "left"}}>
            <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Phone</label>
            <input type='text' className='form-control' />
            </div>
            <div style={{ textAlign: "left"}}>
            <label style={{ fontSize: "14px"}} htmlFor="emailaddress">Vehicle Year, Make & Model</label>
            <input type='text' className='form-control' />
            </div>
            
            <textarea type='textarea' className='form-control' placeholder='I would like to know more about your service...' />
            <button className='contactSubmitBtn'> Submit</button>
            </form>
           
        </section>
        </div>
    </div>
  )
}

export default Contact