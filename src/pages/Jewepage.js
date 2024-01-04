import React, { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router-dom'
import Jewecard from '../components/Jewecard';

const Jewepage = () => {

  const[jeweData, setJeweData] = useState([])
  const data = useLoaderData();

   useEffect(() => {
      setJeweData(data.data);
   }, [data])

  //  console.log(jeweData);
   
  return (
    <div className='max-w-screen-xl mx-auto p-10'>
      <div className='grid grid-cols-4 gap-8'>
        {
          jeweData && jeweData.map((item) =>(
            <Jewecard key={item.product_id} product={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Jewepage