import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {MdOutlineClose} from 'react-icons/md'
import { decrementQuantity, deletItem, incrementQuantity } from '../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi'

const CartItem = () => {

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);

  // console.log(productData);
 
  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
        <h2 className='font-titleFont text-2xl font-semibold'>Shopping cart</h2>
      </div>
      <div>
        {
          productData.length === 0 ? (
            
            <p className='text-2xl text-semibold w-full py-10 border-[1px] border-gray-700 text-center mt-10'>Your cart is empty.</p>
          ):(
           productData.map((item) =>(
            <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>
              <div className='flex items-center gap-3' >
               <MdOutlineClose onClick={()=> dispatch(deletItem(item._id)) & toast.error(`${item.title} is removed from the cart`)}
               className='text-xl text-gray-600 hover:text-black cursor-pointer duration-300' />
               <img src={item.image} alt="itemImage" className='w-32 h-32 object-cover' />
              </div>
              <h2 className='w-52'>{item.title}</h2>
              <p className='w-20'>${item.price}</p>
              
              <div className='flex items-center gap-2'>
              <p className='text-sm'>Quantity</p>
              <button 
              onClick={()=> dispatch(decrementQuantity({
                _id : item._id,
                title : item.title,
                image : item.image,
                price : item.price,
                quantity : 1,
                description : item.description

              }))}
              className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                       <span>{item.quantity}</span>
                       <button
                        onClick={()=> dispatch(incrementQuantity({
                _id : item._id,
                title : item.title,
                image : item.image,
                price : item.price,
                quantity : 1,
                description : item.description

              }))}
               className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
               </div>  
                <p className='w-14'>${item.quantity*item.price}</p>
            </div>
          )))
        }
      </div>
      <ToastContainer
       position="top-left"
       autoClose = {2000}
       hideProgressBar = {false}
       newestOnTop ={false}
       closeOnClick
       rtl = {false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme='dark'
      />
      <Link to="/">
        <button className='mt-10 flex items-center gap-2 text-base'
        ><span><HiOutlineArrowLeft /></span>go to shopping</button>
      </Link>
    </div>
    
  )
}

export default CartItem