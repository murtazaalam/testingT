import routes from '../routes/Services.routes';
 
export default function singleEventApi(eventId, setEventData){
    
    fetch(routes.GetEvents+"/"+eventId).then(response => response.json()).then((data)=>{
        setEventData(data);
    }).catch(error =>{
        if (error.response) {
            ////setApiError(true);
        } else if (error.request) {
        //setApiError(true);
            //setLoader(false);
        } else {
        //setApiError(true);
            //setLoader(false);
        }
    })
}