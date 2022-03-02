import React from "react";
import { useState, useEffect } from "react";

import { Card } from "@mui/material";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import myOrdersApi from "../../apis/api/MyOders";
import CourseCard from "../../components/TopCourses/CourseCard/CourseCard";
import Box from "@mui/material/Box";
import { Navigate, Link } from "react-router-dom";

import Loading from "../../components/Loader";
function MyCourses() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    myOrdersApi(setCourse, setLoading, setError);
  }, []);
  return (
    <>
      <div style={{ placeContent: "center" }}>
        <Box
          component="section"
          className="page-heading"
          sx={{
            background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/My+courses.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="course-container">
            {/* <img src={BlogHead1} alt="" width="15" /> */}
            <nav aria-label="breadcrumb">
              {/* <ol className="breadcrumb">
                <li className="breadcrumb-item active">
                  Home
                  <div className="line"></div>
                </li>
                <li className="breadcrumb-item active">My Courses</li>
              </ol> */}
            </nav>
            <h1 className="event-heading">My Courses</h1>
          </div>
        </Box>
        {loading ? (
          <Loading />
        ) : course.length === 0 ? (
          <Card sx={{ p: 2, mb: 15, mt: 2, textAlignLast: "center" }}>
            <h6>
              {" "}
              No Courses!!! Go to <Link to="/all-courses/all">
                Marketplace
              </Link>{" "}
              and get some courses.
            </h6>
          </Card>
        ) : (
          <>
            {error ? (
              <Navigate to="/404" />
            ) : (
              <Container maxWidth="lg" sx={{ p: 2 }}>
                <Grid container spacing={3}>
                  {course &&
                    course.map((data, index) => (
                      <Grid item>
                        <CourseCard
                          key={index}
                          id={data._id}
                          title={data.course_name}
                          pic={data.course_image}
                          // gradient,
                          // price,
                          // discount,
                          // rating,
                          //couseData={data}
                          fromMycourse={true}
                          // review={data.reviews}
                        ></CourseCard>
                      </Grid>
                    ))}
                </Grid>
              </Container>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default MyCourses;
