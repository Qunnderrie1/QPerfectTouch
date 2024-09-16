
import { Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import { Route , Router } from 'react-router-dom';
import Detail from './Pages/Detail';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import MobileNav from './Components/MobileNav';
import Cart from './Pages/Cart';
import QuoteForm from './Components/QuoteForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/service' element={<Detail />} />
       <Route path='/service/:id' element={<Detail />} />
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact /> } />
       <Route path='/portfolio' element={<Portfolio /> } />
       <Route path='/cart' element={<Cart /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
