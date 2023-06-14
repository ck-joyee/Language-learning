
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


function PopularClassCard({popular}) {
  const {_id,activity,students} = popular
  const {user} = useContext(AuthContext);

  const handlebutton = ({popular}) =>{
    if(user && user.email){
      const list ={listId:_id,activity,students,email:user.email};
      fetch('',
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
          alert('add')
        }
        else{
          alert('login')
        }
      })
    }

     console.log(popular);
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure >
    <img src={popular.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Activity : {popular.activity}</h2>
    <p>Students : {popular.students}+</p>
    <div className="card-actions">
      <button onClick={()=>handlebutton({popular})} className="btn btn-primary">Add to card</button>
    </div>
  </div>
</div>
  )
}

export default PopularClassCard