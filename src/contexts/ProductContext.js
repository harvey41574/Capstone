import React, {createContext, useState, useEffect} from 'react'

const ProductContext =  createContext();
     
    const ProductProvider= ({children}) =>{
        const [products, setProducts]= useState([]);

        useEffect(()=>{
            const fetchProducts= async () =>{
            const response= await fetch('https://fakestoreapi.com/products');
            const data= await response.json() 
            console.log(data);
            };          
        
    }, []);

  return 
         <ProductContext.Provider>{children}</ProductContext.Provider>
      

  
}

export default ProductProvider
