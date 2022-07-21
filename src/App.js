import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import CartProvider from './context/CartProvider';
import Cart from './components/cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CartList from './components/cartList/CartList';
import SuccessPage from './components/success/SuccessPage';

function App() {

 

  return (
    <div className="App"  >
        
      <BrowserRouter>
        <CartProvider>
          <Navbar />          
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:id' element={<Home />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cartList' element={<CartList />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<SuccessPage />} />
          </Routes>
          <Footer />
        </CartProvider>        
              
      </BrowserRouter>
        

    </div>
  );
}

export default App;