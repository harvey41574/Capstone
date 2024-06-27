import React from 'react';
import {createBrowserRouter,
        Outlet,
        RouterProvider,
        ScrollRestoration,
} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import { productsData } from './api/index'

const Layout =()=>{
  return(
    <div>
    <Header />
    <Outlet />
    <Footer /> 
    </div>
  );
 }

const router= createBrowserRouter([
   {
     path: '/',
     element: <Layout />,
     children: [
       {
         path:'/',
         element: <Home />,
         Loader: productsData,
       },
       { 
         path:'/cart',
         element: <Cart />
       }
      ]

  }

 ])
     




function App() {
  return (
    <div className="App">
    
     <RouterProvider router={router}/>
      
    
     
    </div>
  );
}

export default App;
