import { CourseHeader, CourseBody } from "../../components";
import singleCourseApi from "../../apis/api/SingleCourse";
import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loader";

const Courses = () => {
  const [course, setCourseData] = useState({});

  const { id } = useParams();
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  useEffect(() => {
    if (isEmpty(course)) {
      //id of course will be sent
      singleCourseApi(id, setCourseData);
    }
  }, [course]);
  return (
    <>
      {isEmpty(course) ? (
        <Loading />
      ) : (
        <>
          <CourseHeader
            title={course.course_name}
            category={course.category}
            subtitle="subtitle"
            headerImageUrl={course.headerImageUrl}
          />
          <CourseBody course={course} />
        </>
      )}
    </>
  );
};
export default Courses;
