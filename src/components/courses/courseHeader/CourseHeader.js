import { Box } from "@mui/system";
import * as React from "react";
import "./courseHeader.css";

const CourseHeader = (props) => {
  return (
    <>
      <Box
        component="section"
        className="page-heading"
        sx={{
          background: ` #1C477C url(${
            window.matchMedia("(max-width: 668px)").matches
              ? ""
              : props.headerImageUrl
          }) 0 0 no-repeat `,

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
