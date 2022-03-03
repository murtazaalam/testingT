import routes from '../routes/Services.routes';
import axios from 'axios';

export default async function addEventApi(body, setLoader){
    return await axios.post(routes.AddEvent,body).then(res => {
        setLoader(false);
        return res.data.message;
    }).catch(error => {
        setLoader(false)
        if (error.response) {
            return error.response.data.message;
          } else if (error.request) {
            //setApiError(true)
          } else {
            //setApiError(true)
          }
    })
}