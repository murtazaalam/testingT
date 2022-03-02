import routes from "../routes/Services.routes";
import axios from "axios";

export default async function addToCartApi(body, setCartLoader) {
  return await axios
    .post(routes.AddToCart, body, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setCartLoader(false);
      return res.data.message;
    })
    .catch((error) => {
      setCartLoader(false);
      if (error.response) {
        //setApiError(true);
        return error.response.data.message;
      } else if (error.request) {
        //setApiError(true);
      } else {
        //setApiError(true);
      }
    });
}
