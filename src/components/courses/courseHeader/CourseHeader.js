import { Box } from "@mui/system";
import * as React from "react";
import "./courseHeader.css";

const CourseHeader = (props) => {
  console.log(">>>>",props.headerImageUrl)
  return (
    <>
      <Box
        component="section"
        className="page-heading"
        sx={{
          background: `url(${
            window.matchMedia("(max-width: 668px)").matches
              ? ""
              : props.headerImageUrl
          })`,

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="course-container">
          {/* <img src={BlogHead1} alt="" width="15" /> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                Home
                <div className="line"></div>
              </li>
              <li className="breadcrumb-item active">
                Courses
                <div className="line"></div>
              </li>
              <li className="breadcrumb-item active">{props.category}</li>
            </ol>
          </nav>
          <div className="my-container">
            <div className="course-head">
              <h2>{props.title}</h2>
              <p style={{ color: "white" }}>{props.subtitle}</p>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default CourseHeader;
