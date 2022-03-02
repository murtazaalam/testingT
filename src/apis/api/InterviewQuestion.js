import routes from "../routes/Services.routes";
import axios from "axios";

export default async function getInterviewQuestionsApi(setQuestionList, setLoader, setActiveTab) {
  await axios
    .get(routes.InterviewQuestion)
    .then((response) => {
      setQuestionList(response.data);
      setActiveTab(response.data[0]._id);
      setLoader(false);
    })
    .catch((error) => {
      if (error.response) {
        //setApiError(true);
        //console.log(err.response.data.message);
        //return error.response.data.message;
        setLoader(false);
      } else if (error.request) {
        //setApiError(true);
        setLoader(false);
      } else {
        //setApiError(true);
        setLoader(false);
      }
    });
}
