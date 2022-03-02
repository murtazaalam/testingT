import routes from "../routes/Services.routes";
import axios from "axios";

export default function getTopCourseApi(setTopCourses){
    axios.get(routes.TopCourse).then((res) => {
        setTopCourses(res.data);
    }).catch(error => {
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