import { Link } from "react-router-dom";
import pic from "../assets/notfound.jpg";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={pic}alt="" width="500" height="500"/>
        <button className="btn btn-neutral">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
