import React from 'react'
import {logoLight, paymentLogo} from '../assets/index'
import { FaGithub, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import { FaPaypal } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full h-80 bg-black text-[#949494] font-titleFont'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4 pt-20'>
        <div className='flex flex-col gap-3'>
          <img className='w-28' src={logoLight} alt={logoLight} />
          <p className='text-white'>bazaar.com</p>
          <img className='w-28' src={paymentLogo} alt={paymentLogo} />
          <div className='flex gap-3.5 mt-1 text-gray-400 text-lg'>
              <FaGithub className='hover:text-white cursor-pointer'/>
              <FaYoutube className='hover:text-white cursor-pointer' />
              <FaFacebookF className='hover:text-white cursor-pointer'/>
              <FaXTwitter className='hover:text-white cursor-pointer'/>
              <FaInstagram className='hover:text-white cursor-pointer'/>
          </div>
        </div>


        <div>
             <h2 className='text-white text-2xl'>locate us</h2>
             <div>
                 <p className='text-sm mt-3'>BTM layout, Banglore</p>
                 <p className='text-sm mt-2.5'>Mobile : 09835782123</p>
                 <p className='text-sm mt-2.5'>Phone : 2019 3324 2443</p>
                 <p className='text-sm mt-2.5'>e-mail : ebazar@gmail.com</p>
             </div>
        </div>

        <div>
          <h2 className='text-2xl font-normal text-white'>profile</h2>
          <p className='flex items-centre gap-3 hover:text-white cursor-pointer text-sm mt-3'><span className='flex justify-center items-center'><BsPersonFill /></span>my account</p>
          <p className='flex items-centre gap-3 hover:text-white cursor-pointer mt-2.5 text-sm'><span className='flex justify-center items-center'><FaPaypal /></span>checkout</p>
          <p className='flex items-centre gap-3 hover:text-white cursor-pointer mt-2.5 text-sm'><span className='flex justify-center items-center'><IoHome /></span>order tracking</p>
          <p className='flex items-centre gap-3 hover:text-white cursor-pointer mt-2.5 text-sm'><span className='flex justify-center items-center'><FaLocationDot /></span>help & supporting</p>
      </div>

      <div className='flex flex-col'>
        <input className='bg-transparent border px-4 py-2 text-sm' type="text" placeholder='email' />
        <button className='text-sm border text-white border-t-0 py-1 hover:bg-gray-500 hover:text-white active:bg-white active:text-black'>subscibe</button>
      </div>
      </div>
    </div>
  )
}

export default Footer