import { Container, Typography } from "@mui/material";
import * as React from "react";
import CourseCard from "./CourseCard/CourseCard";
import "./TopCourses.css";
import { Link } from "react-router-dom";
import image from "../../assets/Svgs/course.svg";
import getTopCourseApi from "../../apis/api/TopCourses";

const TopCourses = () => {
  const [topCourses, setTopCourses] = React.useState([]);
  React.useEffect(() => {
    getTopCourseApi(setTopCourses);
  }, []);
  return (
    <>
      {topCourses && topCourses.length !== 0 ? (
        <Container sx={{ maxWidth: "none !important" }}>
          <section>
            <Typography component="div" className="techvanto-whyus ">
              <Typography component="h2" className="techvanto-whyus-heading">
                Top Courses:
              </Typography>
            </Typography>
            <section className="display-grid fr4 top-course-aria">
              {topCourses && topCourses.length !== 0
                ? topCourses.map((data, index) => {
                    return (
                      <CourseCard
                        key={index}
                        id={data._id}
                        title={data.course_name}
                        pic={data.thumbnail}
                        gradient={data.gradient}
                        price={data.price}
                        rating={data.avg_rating}
                        couseData={data}
                        // review={data.reviews}
                      ></CourseCard>
                    );
                  })
                : ""}
            </section>
          </section>
          <div className="techvanto-all-course-button">
            <Link to="/all-courses/all" style={{ textDecoration: "none" }}>
              <button
                // variant="contained"
                className="btn-grad"
              >
                All Courses ►
              </button>
            </Link>
          </div>
          <br />
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default TopCourses;
