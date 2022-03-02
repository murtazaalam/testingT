import React from "react";
import { Grid } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import LeftPanel from "../../components/contactUs/forHiring/leftPanel";
import { Typography, Container, Box } from "@mui/material";
import { HiringPartners } from "../../components";
import RightPanel from "../../components/contactUs/forHiring/RightPanel";
import "./contact-us.css";
function contactUsToGetHired() {
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
              <LeftPanel heading="PLacement Opportunities form-hiring" />
            </div>
          </Grid>
          <Grid
            item
            xs={4}
            //   style={{ border: "2px solid black" }}
            className="right-form-position form-hiring"
          >
            <div>
              <h5>
                Contact Us for placement Opportunities
                <InfoIcon />
              </h5>

              <RightPanel formType={"placement"} />
            </div>
          </Grid>
          <div style={{height: '20px'}}></div>
          <Grid item xs={12}>
            <div className="bg-image bg-image hiring-partner-section">
              <Container className="section-spacing">
                <Typography component="div" className="techvanto-whyus ">
                  <Typography
                    component="h2"
                    className="techvanto-whyus-heading"
                  >
                    Hiring Partners
                  </Typography>
                </Typography>
                <HiringPartners />
              </Container>
            </div>
          </Grid>
        </Grid>
        <div style={{height: '40px'}}></div>
      </div>
    </>
  );
}

export default contactUsToGetHired;
