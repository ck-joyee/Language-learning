import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

function Instructor() {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="mb-5">
      <h1 className="text-3xl text-center font-bold mt-10 mb-5">
        Our Best Instructor
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
}

export default Instructor;
