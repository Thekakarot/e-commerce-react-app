import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';

const Jewecard = ({product}) => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
  
    const handleDetails = () =>{
      Navigate(`/product/${product._id}`,{
        state :{
          item : product,
        },
      }); 
    }
  
    console.log(product);
    return (
      <div className='group relative'>
  
       <div onClick={handleDetails} className='w-full h-48 overflow-hidden cursor-pointer'>
        <img className='w-full h-full object-cover hover:scale-110 duration-300' src={product.image} alt="" />
       </div>
  
       <div  className='w-full border-[1px] px-2  py-4'>
        <div className='flex items-center justify-between'>
          <div><h2 className='font-titlefont text-sm font-semibold'>{product.name}</h2></div>
          <div className='flex gap-2'>
            <p className='line-through text-gray-600'>${product.oldPrice}</p>
            <p className='font-semibold'>${product.price}</p>
          </div>
        </div>
        <div>
          <p className='text-sm'>{product.category}</p>
        </div>
        <div className='absolute top-4 right-0'>
         { product.isNew && (
            <p className='bg-black text-white px-6 py-1'>Sale</p>
          )}
        </div>
        <div>
          <button onClick={() => dispatch(addToCart({
       _id: product._id,
       title: product.title,
       image: product.image,
       price: product.price,
       quantity: 1,
       description: product.description
       })) & toast.success(`${product.title} is added`)
       } 
       className='w-full h-9 border-[1px] border-gray-700 cursor-pointer mt-2 hover:bg-slate-700 hover:text-white active:bg-black active:text-white'>Add to Cart</button>
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

export default Jewecard