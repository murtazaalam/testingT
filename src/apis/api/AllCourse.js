//import { constSelector } from "recoil";
import routes from "../routes/Services.routes";

export default async function AllCourseApi(
  setAllCourses,
  setCourseByCategory,
  setLoading
) {
  return await fetch(routes.GetCourses)
    .then((response) => response.json())
    .then((data) => {
      setAllCourses(data);
      setLoading(false);

      setCourseByCategory(groupByKey(data, "category"));

      // This function group all courses according to category
      function groupByKey(array, key) {
        return array.reduce((hash, obj) => {
          if (obj[key] === undefined) return hash;
          return Object.assign(hash, {
            [obj[key]]: (hash[obj[key]] || []).concat(obj),
          });
        }, {});
      }
      console.log(groupByKey(data, "category"));
      //return groupByKey(data, "category");
    })
    .catch((error) => {
      if (error.response) {
        setLoading(true);
      } else if (error.request) {
        setLoading(true);
      } else {
        setLoading(true);
      }
    });
}
