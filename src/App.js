
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import BookAppointment from './Pages/BookAppointment';
import ServiceDetail from './Pages/ServiceDetail';
import { useParams } from 'react-router-dom';
import NotFound from './Pages/NotFound';

function App() {

  let  { id }  = useParams();

  console.log(id)


  
  return (
    <div className="App container-fluid">
      <Navbar />
      
       <Routes>
       <Route path='/QPerfectTouch' element={<Home />} />
       <Route path='/QPerfectTouch/services' element={<Services />} />
       <Route path='/QPerfectTouch/contact' element={<Contact />} />
       <Route path='/QPerfectTouch/about' element={<About />} />
       {/* <Route path='/cart' element={<Cart />} /> */}
       <Route path='/QPerfectTouch/book' element={<BookAppointment />} />
       <Route path={`service/${id}`} element={<ServiceDetail />} />
       <Route path="*" element={<NotFound />} />


      </Routes>
      <Footer />

    </div>
  );
}

export default App;
