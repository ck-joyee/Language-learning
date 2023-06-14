
import ClassesCart from "./ClassesCart";
import { useState } from "react";
import { useEffect } from "react";

function Clsasses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://y-psi-hazel.vercel.app/popular")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg?size=626&ext=jpg&uid=R98219700&ga=GA1.2.1081700445.1665935105&semt=ais")',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Our Class</h1>
            <p className="mb-5 w-[600px] text-center">
            Embarking on a language learning journey at our club not only enriches linguistic skills but also fosters personal growth and a sense of community. By actively engaging in language classes, students not only develop their language proficiency but also cultivate teamwork, collaboration, and a strong sense of camaraderie. Through immersive language activities, learners acquire valuable skills, embrace cultural diversity, and experience the holistic benefits of an enriching language learning experience. Our language learning club promotes a lifelong passion for language acquisition, holistic growth, and a deep appreciation for the power of effective communication.
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 mt-10 mb-10'>
        {
            data.map(populer=><ClassesCart
            key={populer._id}
            populer={populer}></ClassesCart>)
        }
    </div>
    </div>
  );
}

export default Clsasses;
