import { useEffect, useState } from "react";
import AllinstructorCard from "./AllinstructorCard";

function Allinstructor() {
const [instructors, setInstructors] = useState([]);
useEffect(()=>{
    fetch('')
    .then(res => res.json())
    .then(data => setInstructors(data));
},[])

  return (
    <div>
    <div
      className="hero h-[500px]"
      style={{backgroundImage: 'url("https://img.freepik.com/free-photo/teacher-doing-her-english-class-with-whiteboard_23-2148999498.jpg?size=626&ext=jpg&uid=R98219700&ga=GA1.2.1081700445.1665935105&semt=ais")'}}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Our Instructors</h1>
          <p className="mb-5 w-[600px] text-center">
          Our language learning club is fortunate to have an instructor who embodies the highest standards of excellence, serving as a beacon of inspiration and guidance on our transformative journey. With unwavering dedication and a wealth of expertise, they have taken our skills to new heights and fostered within us an unwavering passion for the pursuit of language mastery. Join us as we delve into the extraordinary narrative of their mentorship and leadership, uncovering the profound impact they have made on our language learning experience.
          </p>
        </div>
      </div>
    </div>
    <div className='grid grid-cols-2 gap-4 mt-10 mb-10'>
        {
            instructors.map(instructor=><AllinstructorCard
            key={instructor._id}
            instructor={instructor}></AllinstructorCard>)
        }
    </div>
  </div>
  
  );
}

export default Allinstructor;
