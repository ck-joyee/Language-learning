
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import { useNavigate } from 'react-router-dom';

function PopularClassCard({populer}) {
  const {_id,activity,students} = populer
  const {user} = useContext(AuthContext);
//   const navigate = useNavigate();
  const handlebutton = ({populer}) =>{
    if(user && user.email){
      const list ={listId:_id,activity,students,email:user.email};
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
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure >
    <img src={populer.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Activity : {populer.activity}</h2>
    <p>Students : {populer.students}+</p>
    <div className="card-actions">
      <button onClick={()=>handlebutton({populer})} className="btn btn-primary">Add to card</button>
    </div>
  </div>
</div>
  )
}

export default PopularClassCard