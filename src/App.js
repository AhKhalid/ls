import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import ErrorPage from './components/ErrorPage';
import Categories from './components/Categories';
import Offers from './components/Offers';
import Cart from './components/Cart';
import { useState } from 'react';
import Beneficiary from './components/Beneficiary';
import Payment from './components/Payment';

function App() {
  const [cartVisible, setCartVisible] = useState(false)
  const toggleCart = () => {
    setCartVisible(!cartVisible)
  }
  return (
    <div className='app'>
      <div className='app-header'>
        <Header onCartClick={toggleCart}/>
      </div>
      <div className='app-content'>
        {cartVisible && <Cart onCartClose={toggleCart} />}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/categories"} element={<Categories />} />
          <Route path={"/offers"} element={<Offers />} />
          <Route path={"/beneficiary"} element={<Beneficiary />} />
          <Route path={"/payment"} element={<Payment />} />
          <Route path="/items" element={<Items />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <div className='app-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
