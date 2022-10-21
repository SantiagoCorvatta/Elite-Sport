import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Chekout';
import { CartProvider } from './contexts/CartContext';
import { useEffect } from 'react';
import { createAllProducts } from './utils/products';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <CartProvider>
      <NavBar />      
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={`Bienvenido a Elite Sport`} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={`Bienvenido a Elite Sport`} />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>  
    </>
  );
}

export default App;
