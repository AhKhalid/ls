import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import ErrorPage from './components/ErrorPage';
import Categories from './components/Categories';
import Offers from './components/Offers';

function App() {
  return (
    <div className='app'>
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-content'>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/categories"} element={<Categories />} />
          <Route path={"/offers"} element={<Offers />} />
          <Route path="/items" element={<Items />} />
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
