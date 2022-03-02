import routes from "../routes/Services.routes";
import axios from "axios";

export default async function removeItemFromCart(id, setCount) {
  return await axios
    .delete(routes.RemoveFromCart + id, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setCount(res.data.deletedCount);
      return { status: 200, message: "Course deleted successfully." };
    })
    .catch((err) => {
      return { status: 400, message: "Failed to delete " };
    });
}
