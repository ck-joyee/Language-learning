import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Provider/AuthProvider";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { refetch, data: cart = [] } = useQuery(
    ["carts", user?.email],
    async () => {
      const response = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
    },
    {
      enabled: !loading,
    }
  );

  return [cart, refetch];
};
export default useCart;
