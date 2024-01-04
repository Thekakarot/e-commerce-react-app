import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { MdOutlineStar } from "react-icons/md";
import { addToCart } from '../redux/bazarSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

export const Product = () => {
    const dispatch = useDispatch();
    const[productDetails, setProductDetails] = useState({});
    const[quantity, setQuantity] = useState(1);
    const  location = useLocation();

    useEffect(() => {
       setProductDetails(location.state.item);
    //    console.log(location.state.item);
    // eslint-disable-next-line
    }, []);
    
  return (
    <div>
       <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
         <div className='w-2/5 relative'>
            <img className='w-full h-[550px] object-cover' src ={productDetails.image} alt="productImg" />
           
            <div className='absolute top-4 right-0'>
                {
                    productDetails.isNew && (
                        <p className='bg-black font-titleFont text-white px-8 py-1'>Sale</p>
                    )
                }
            </div>
         </div>

         <div className='w-3/5 flex flex-col justify-center gap-5'>
            
             <div>
                <h2 className='text-4xl font-semibold'>{productDetails.title}</h2>
                <div className='mt-3'>
                <p className='text-base text-gray-600'>category : {productDetails.category}</p>
                </div>
                <div className='flex items-center gap-4 mt-3'>
                    <p className='line-through text-base text-gray-500'>${productDetails.oldPrice}</p>
                    <p className='font-semibold text-2xl'>${productDetails.price}</p>
                    
                </div>
                </div>

                <div className='flex gap-2 text-base items-center'>
                  <div className='flex'>
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  </div>
                  <div>
                    <p className='text-base text-gray-500'>(1 customer review)</p>
                  </div>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>{productDetails.description}</p>
                </div>
                
                <div className='flex items-center gap-8'>
                    <p className='text-sm text-black font-semibold'>Quantity</p>
                    <div className='text-sm flex items-center gap-4 font-semibold'>
                       <button onClick={()=>setQuantity(quantity ===1 ? 1 : (quantity-1))} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                       <span>{quantity}</span>
                       <button onClick={()=>setQuantity(quantity+1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                    </div>
                    <div>
                        
                        <button onClick={() => dispatch(addToCart({
                             _id: productDetails._id, //productsDetials from useState where all the products are available
                              title: productDetails.title,
                              image: productDetails.image,
                              price: productDetails.price,
                              quantity: quantity, //quantity are from useState
                              description: productDetails.description
                              })) & toast.success(`${productDetails.title} is added`)
                              }
                     className='px-4 py-2 bg-black text-white active:bg-gray-800'>add to cart</button>
                    </div>
                </div>

         </div>
          
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
    </div>
  )
}
