import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import CartProvider from './components/context/CartProvider';


function App() {

 

  return (
    <div className="App" >
        
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </CartProvider>        
              
      </BrowserRouter>
        

    </div>
  );
}

export default App;