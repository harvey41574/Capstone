import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';








function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path= '/' element={<Home/>} />
           <Route path= '/cart' element={<Cart/>} />
            <Route path= '/product/:id' element= {<ProductDetails />}/>
            


        </Routes>
      <Footer />
      
      
      
      
      </BrowserRouter>
 
     
    </div>
  );
}

export default App;
