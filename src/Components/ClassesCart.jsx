
import { useContext } from 'react';

import useCart from './hook/useCart';
import { AuthContext } from '../Provider/AuthProvider';


function ClassesCart({populer}) {
    const {_id,activity,students,price,image} = populer
    const [, refetch] = useCart();
    const {user} = useContext(AuthContext);
    const handlebutton = ({populer}) =>{
      if(user && user.email){
        const list ={_id,activity,image,students,price,email:user.email};
        fetch('http://localhost:5000/carts',
        {
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(list)
        }
        )
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            refetch();
            alert('add')
          }
          else{
            alert('login')
          }
        })
      }
  
       console.log(populer);
    }
  return (
    <div>
    <div className='flex space-x-4 mb-2 border p-5 justify-between'>
    <div className='flex space-x-4 mb-2'>
    <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[120px]' src={populer.image} alt="" />
    <div className='pl-10'>
        <h3 className='uppercase'>{populer.activity} </h3>
        <p>{populer.students}</p>
    </div>
    </div>
<div><button onClick={()=>handlebutton({populer})} className="btn btn-primary">Add to card</button></div>
</div>
    </div>
  )
}

export default ClassesCart