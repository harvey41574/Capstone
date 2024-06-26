import React, { useState, useEffect }from 'react'
import {ProductContext} from '../contexts/ProductContext'
import Banner from '../components/Banner'
import Products from '../components/Products'

const Home = () => {
    const [products, setProducts]= useState([]);


  return (
    <div>
        <Banner />
        <Products />
    
    </div>
  )
}

export default Home
