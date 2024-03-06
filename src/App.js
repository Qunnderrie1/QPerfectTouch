
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Booking from './Pages/CustomerInformation';
import CustomerInformation from './Pages/CustomerInformation';

function App() {
  
  return (
    <div className="App container-fluid">
      <Navbar />
      
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/services' element={<Services />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/about' element={<About />} />
       {/* <Route path='/cart' element={<Cart />} /> */}
       <Route path='/about' element={<About />} />
       <Route path='/makeappointment' element={<CustomerInformation />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
