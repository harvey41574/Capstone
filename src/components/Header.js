import React from 'react'
import {FaShoppingCart } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-20 bg-gray-200 border-b-[3px] boder-b-gray-900 shadow-xl sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
          <div>
            <div className='flex items-left font-extrabold h-10 text-left'>Scotty's</div>
             <ul className='flex items-center gap-8'>
              <Link to ='/'>
                <li className='text-base text-black font-bold hover:text-purple-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                    Home</li>
                    </Link>
                 <Link to ='/products'>  
                <li className='text-base text-black font-bold hover:text-purple-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                    Shop</li></Link>
                  <Link to = '/login'>
                 <li className='text-base text-black font-bold hover:text-purple-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                    Login</li></Link>
                 <Link to = '/register'>
                <li className='text-base text-black font-bold hover:text-purple-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                    Register</li></Link>
             </ul>
             <div className='flex gap-2 content-end'>
                <FaShoppingCart/>
             </div>
          </div>
        </div>
      </div>
       
  )
}

export default Header
