import routes from '../routes/Services.routes';
import axios from 'axios';

export default function orderNowApi(data, setError, setLoading){
    //console.log("order");
    axios.post(routes.OrderTest, data).then((res) => {
        console.log(res);
        //setError(res.data.message);
    }).catch((error) => {
        if (error.response.data) {
            if(error.response.data.message) return setError(error.response.data.message);
            setError(error.response.data.error[0].msg);
        } else if (error.request) {
        //setApiError(true);
        } else {
        //setApiError(true);
        }
    })
}
