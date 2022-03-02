import routes from "../routes/Services.routes";
import axios from "axios";

export default async function getFromCartApi(
  setCartItems,
  setLoading,
  setError
) {
  return axios
    .get(routes.GetCartItems, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setCartItems(res.data);
      setLoading(false);
      return res.data;
    })
    .catch((err) => {
      // console.log(err);
      // console.log(err.message);
      setLoading(false);
      setError(err.message);
    });
}
