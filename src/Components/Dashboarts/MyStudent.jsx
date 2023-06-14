import Swal from "sweetalert2";
import useCart from "../hook/useCart";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function MyStudent() {
  const [cart, refetch] = useCart();

  console.log("cart:", cart);

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://y-psi-hazel.vercel.app/carts/${item._id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
          }
        });
      }
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(total);

  return (
    <div className="w-full ml-28">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3>Total registration: {cart.length}</h3>
        <h3>Total Amount: ${total}</h3>
        <Link to="/Dashborart/payment">
          <button className="btn btn-warning btn-sm">PAY</button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Sports Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>
                  <label>{index + 1}</label>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.activity}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyStudent;
