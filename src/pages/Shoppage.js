import React from 'react'
import { cloth1, elect2, jewellary} from '../assets'
import { Link } from 'react-router-dom'


const Shoppage = () => {
  return (
    <div className='w-full h-auto'>
      
        <div className='flex flex-col items-center gap-4 mt-10'>
          <h1 className='w-80 py-2 text-2xl bg-black text-white text-center'>shopping everyday</h1>
          <span className='w-20 h-[4px] bg-black'></span>
          <p className='max-w-[700px] text-gray-700 text-center'>This website is an online platform designed for the buying goods and services. It enables businesses to showcase their products, provide detailed information, and facilitate secure transactions over the internet.</p>
        </div>
         
    
        <div className='w-[70%] mx-auto mt-10 border-[2px] hover:border-black rounded-md'>
        <div className='mt-10 mb-10 cursor-pointer'>
            <img src={cloth1} alt="" className='w-[50%] mx-auto h-[20rem] rounded-md' />
            <div className='flex items-center justify-center mt-4'>
                <h2 className='text-xl font-semibold'>Shop for Men , Women & Children</h2>
            </div>
        </div>
        </div>
        <div className='w-[70%] mx-auto mt-10 mb-10 border-[2px] hover:border-black rounded-md'>
       <Link to="/jewepage">
        <div className='mt-10 mb-10 cursor-pointer'>
            <img src={jewellary} alt="jewellary-pic" className='w-[50%] mx-auto h-[20rem] rounded-md' />
            <div className='flex items-center justify-center mt-4'>
                <h2 className='text-xl font-semibold'>Shop for Jewellary</h2>
            </div>
        </div>
        </Link>
        </div>
        <div className='w-[70%] mx-auto mt-10 mb-10 border-[2px] hover:border-black rounded-md'>
       <Link to="/electronicpage">
        <div className='mt-10 mb-10 cursor-pointer'>
            <img src={elect2} alt="electonic-pic" className='w-[50%] mx-auto h-[20rem] rounded-md' />
            <div className='flex items-center justify-center mt-4'>
                <h2 className='text-xl font-semibold'>Shop for Electronic Aplliances</h2>
            </div>
        </div>
        </Link>
        </div>
    </div>
  )
}

export default Shoppage