import React, {useState, useEffect} from 'react'
import ProductsCard from './ProductsCard'
import '../App.css'
import axios from 'axios'

function Products() {
  const [loading, setLoading]= useState([]);
  const [data, setData] =useState([]);

  useEffect(()=>{
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products"

    }).then(res=>{
      console.log(res.data)
      setData(res.data)
    }).catch(e=>console.log(e))
    .finally(()=>setLoading(false))
  }, []);

 
}
  
export default Products
