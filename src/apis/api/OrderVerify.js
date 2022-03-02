import routes from "../routes/Services.routes";
import axios from "axios";

export default function verifyOrderApi(body, setPaymentMessage, setOpen) {
  axios
    .post(routes.OrderVerify, body, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setPaymentMessage(res.data.message);
      setOpen(true);
    })
    .catch((error) => {
      if (error) {
            
      } else if (error.request) {
      //setApiError(true);
      } else {
      //setApiError(true);
      }
    });
}
