import routes from '../routes/Services.routes';
import axios from 'axios';

export default async function addOrderApi(body){
    return await axios.post(routes.AddOrder,body,{
        headers: {
            'token': localStorage.getItem('token')
        },
    }).then(res => {
        return res.data.response;
    }).catch(error => {
        if (error.response) {
            //setApiError(true)
          } else if (error.request) {
            //setApiError(true)
          } else {
            //setApiError(true)
          }
    })
}