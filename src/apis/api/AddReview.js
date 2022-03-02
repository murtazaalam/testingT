import routes from '../routes/Services.routes';
import axios from 'axios';

export default async function addReviewApi(body, setError, setLoader){
    return await axios.post(routes.AddReview,body,{
        headers: {
            'token': localStorage.getItem('token')
        },
    }).then(res => {
        setError(false);
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