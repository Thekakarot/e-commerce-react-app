import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"

const Cart = () => {
   const productData = useSelector((state) => state.bazar.productData);
   const userInfo = useSelector((state) => state.bazar.userInfo);
   const [totalAmount, setTotalAmount] = useState("");
   const[payNow, setPayNow] = useState(false);


   useEffect(() => {
     let price = 0;
     productData.map((item)=>{
      price += item.quantity * item.price;
     return price;
     });
     setTotalAmount(price.toFixed(2));
   }, [productData])
   

   const handleCheckout = () =>{
    if(userInfo){
      setPayNow(true);
    }else{
      toast.error("please sign in to checkout");
    }
   }

   const payment = async (token) =>{
    await axios.post("http://localhost:8000/pay",{
      amount : totalAmount*100,
       token : token,
    });
   }

  return (
    <div className='max-w-screen-xl mx-auto flex py-20'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4 border-l-[1px] border-l-gray-600 '>
        <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-600 pb-6'>
           <h2 className='text-2xl font-medium border-[1px] border-b-gray-600'>Cart Totals</h2>
           <p className='flex items-center gap-4 text-base'>Subtotal
           <span className='font-bold font-titleFont text-lg'>$ {totalAmount}</span></p>
           <p className='flex items-center gap-4 text-base'>Shipping
           <span className='text-sm'>BTM layout, 1st Cross road main, Banglore</span></p>
        </div>
         
            <p className='font-titleFont font-semibold flex justify-between mt-6'>Total
            <span>$ {totalAmount}</span></p>
            <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-2 mt-5 hover:bg-gray-700 active:bg-slate-900 active:text-white duration-300'>Proceed to checkout</button>
            {
              payNow && <div className='w-full flex items-center justify-center mt-5'>
                <StripeCheckout
                stripeKey='pk_test_51ORTxuSFe6DTz2AEu61yqoGHHJhDUZHoix2nGKstjxzHLyOdjLSkJLsQu0GXNYBRCXx90Snglc8gfg0PMeV4bspv00uPSS3DRq'
                name='Bazar online shopping'
                amount={totalAmount*100}
                label='pay to bazar'
                token={payment}
                description= {`Your payment amount is $${totalAmount}`}
                email={userInfo.email}
                 />
              </div>
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
    </div>
  )
}

export default Cart