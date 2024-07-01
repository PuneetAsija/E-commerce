import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Footer from './Components/Footer/Footer.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_womens.png';
import kid_banner from './Components/Assets/banner_kids.png';
import About from './Pages/About.jsx';
import Contactus from './Pages/Contactus.jsx';
import About_banner from './Components/Assets/banner_about.png'
import Contact_banner from './Components/Assets/banner_contact.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path='/about' element={<ShopCategory banner={About_banner} />} />
          <Route path='/contactus' element={<ShopCategory banner={Contact_banner} />} />
          <Route path='/product/:productId' element={<Product />} /> 
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
