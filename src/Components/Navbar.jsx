import { Link } from "react-router-dom";
import logo from "../assets/L logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useCart from "./hook/useCart";


const Navbar = () => {
  const [cart] = useCart();
  const {user, logOut} = useContext(AuthContext);
  const handleLogout = () =>{
    logOut()
   .then()
   .catch((error) => console.log(error));
  
}
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/instructor">Our Instructor</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/Dashborart/mystudent">
          <button >
            Dashborard
            <div className="badge bg-black border-none text-white">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-base-100 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img width="30" height="30" src={logo} alt="" />
          <a className="btn btn-ghost normal-case text-xl">Language-Learning</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
        {user ? (
          <Link to="/login" className="btn " onClick={handleLogout}>
            logOut
          </Link>
        ) : (
          <div>
            {" "}
            <Link to="/login" className="btn ">
              Login
            </Link>
            <Link to="/signup" className="btn ml-3">
              SignUp
            </Link>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
