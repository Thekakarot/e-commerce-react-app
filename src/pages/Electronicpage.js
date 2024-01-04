import React, { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router-dom'
import Electcard from '../components/Electcard';

const Electronicpage = () => {

  const[electronicData, setElectronicData] = useState([])
  const data = useLoaderData();

   useEffect(() => {
      setElectronicData(data.data);
   }, [data])

  //  console.log(electronicData);
   
  return (
    <div className='max-w-screen-xl mx-auto p-10'>
      <div className='grid grid-cols-4 gap-8'>
        {
          electronicData && electronicData.map((item) =>(
            <Electcard key={item.product_id} product={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Electronicpage