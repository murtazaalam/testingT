import routes from "../routes/Services.routes";
import axios from "axios";

export default function myOrdersApi(setCourse, setLoading, setError) {
  axios
    .get(routes.MyOrder, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      setCourse(response.data);
      console.log(response);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response);

      setLoading(false);
      setError(err.response.data.message);
    });
}
