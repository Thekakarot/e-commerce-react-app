import React from 'react'
import { cartImg, logoDark } from '../assets'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import UserProfile from './UserProfile';




const Header = () => {

  const productData = useSelector((state) => state.bazar.productData);
  // console.log(productData);
  
  // function handleClick() {
  //   window.location.reload(false);
  // }

  const {user} = useUserAuth();
   
   

  return (
    <div className='w-full h-20 border-b-[1px] bg-white border-b-gray-800 font-titleFont sticky top-0 z-50'>
    <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
      <div className=''>
      <Link to="/">
        <img onClick={()=>window.scroll(0,0)} className='w-28 cursor-pointer' src={logoDark} alt="logoDark" />
        </Link>
      </div>
      <div>
        <div className='flex items-center gap-7'>
          <ul className='flex items-center gap-7'>
          <Link to="/">
            <li className='text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
            </Link>
            <Link to="/pages">
            <li className='text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
            </Link>
            <Link to="/shoppage">
            <li className='text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
            </Link>
            {/* <li className='text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li> */}
            <li className='text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>About</li>
          </ul>
          <Link to="/cart">
          <div className='relative'>
          <img className='w-6' src={cartImg} alt="cartImg" />
          <span className='absolute w-6 top-2 left-2 text-sm flex items-center justify-centre
                     font-semibold'>{productData.length}</span>
        </div>
          </Link>
       
        <div>
           {/* <img className='w-8 h-8 rounded-full' src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
           {  user ? <UserProfile/>:
           <Link to="/login">
           <button className='w-[5rem] h-8 rounded-sm  bg-black hover:bg-slate-800 text-white text-sm'>Resister</button>
           </Link>
           }
        </div>
       
        </div>
        
      </div>
    </div>

    </div>
  )
}

export default Header