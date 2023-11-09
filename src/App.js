import './App.css';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import Offers from './components/Offers';
import Recommendations from './components/Recommedations';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Offers />
      <Categories />
      <Recommendations />
      <Footer />
    </>
  );
}

export default App;
