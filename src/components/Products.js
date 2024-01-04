import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
  // console.log(products);
  return (
    <div className='pt-10'>
      
        <div className='flex flex-col items-center gap-4'>
          <h1 className='w-80 py-2 text-2xl bg-black text-white text-center'>shopping everyday</h1>
          <span className='w-20 h-[4px] bg-black'></span>
          <p className='max-w-[700px] text-gray-700 text-center'>This website is an online platform designed for the buying goods and services. It enables businesses to showcase their products, provide detailed information, and facilitate secure transactions over the internet.</p>
        </div>

        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-8'>
          {
            products && products.map((item) =>(
              <ProductsCard key={item._id} product={item} />
            ))
          }
        </div>
    
    </div>
  )
}

export default Products