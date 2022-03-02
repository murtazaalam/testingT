import React from "react";
import { Grid, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import LeftPanel from "../../components/contactUs/forHiring/leftPanel";
import { AboutUs, TopClient } from "../../components";
import RightPanel from "../../components/contactUs/forHiring/RightPanel";
import "./contact-us.css";

function contactUsForHiring() {
  return (
    <>
      <Box
        className="page-heading"
        sx={{
          background: `#1C477C url(${
            window.matchMedia("(max-width: 668px)").matches
              ? ""
              : "https://tv-academy-assets.s3.eu-west-2.amazonaws.com/contact+us.jpg"
          }) 0 0 no-repeat`,

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="course-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                Home
                <div className="line"></div>
              </li>
              <li className="breadcrumb-item active">Contact Us</li>
            </ol>
          </nav>
          <h1 className="event-heading">Contact Us</h1>
        </div>
      </Box>
      <div className="contactus contactus-section">
        <Grid container>
          <Grid
            item
            md={6.5}
            xs={12}
            sx={{ pb: 6 }}
            className="left-card-position"
          >
            <div>
              <LeftPanel heading="For Hiring" />
            </div>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            //   style={{ border: "2px solid black" }}
            className="right-form-position form-hiring"
          >
            <div>
              <h5>
                Contact Us for Hiring
                <InfoIcon />
              </h5>

              <RightPanel formType={"hiring"} />
            </div>
          </Grid>

          <Grid item xs={12}>
            <section style={{ paddingTop: "30px" }}>
              <AboutUs title="About us"></AboutUs>
              <TopClient title="Our College/University partners:"></TopClient>
            </section>
          </Grid>
        </Grid>
        <div style={{height: '40px'}}></div>
      </div>
    </>
  );
}

export default contactUsForHiring;
