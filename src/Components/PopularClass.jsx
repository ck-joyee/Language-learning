
import { useEffect, useState } from 'react';
import PopularClassCard from './PopularClassCard';

function PopularClass() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/popular")
        .then(res => res.json())
        .then(data=>setData(data))
    }, [])


  return (
    <div className='mb-5'>
        <h1 className='text-3xl text-center mt-5 mb-5 font-bold'>Some Popular Classes</h1>
        <div className='grid md:grid-cols-3 gap-4 grid-cols-1'>
            {
                data.map(popular =><PopularClassCard
                key={popular._id}
                popular={popular}></PopularClassCard>)
            }
        </div>

    </div>
  )
}

export default PopularClass