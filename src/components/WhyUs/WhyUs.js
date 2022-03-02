import * as React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Typography } from "@mui/material";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <>
      <Grid item md={3} sm={6} xs={12}>
        <Item className="techvanto-whyus-grid-item">
          <CloudUploadTwoToneIcon className="techvanto-whyus-cloudupload-icon" sx={{color: 'var(--color-secondary)'}} />
          <CountUp end={60} duration={1} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <div className="techvanto-whyus-grid-item-count">
                  <span ref={countUpRef}></span>+
                </div>
              </VisibilitySensor>
            )}
          </CountUp>
          <Typography component="p">
            Products <br /> Delivered
          </Typography>
        </Item>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Item className="techvanto-whyus-grid-item">
          <SupervisorAccountRoundedIcon className="techvanto-whyus-cloudupload-icon" sx={{color: 'var(--color-secondary)'}} />
          <CountUp end={10000} duration={1} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <div className="techvanto-whyus-grid-item-count">
                  <span ref={countUpRef}></span>+
                </div>
              </VisibilitySensor>
            )}
          </CountUp>
          <Typography component="p">
            Community <br /> Members
          </Typography>
        </Item>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Item className="techvanto-whyus-grid-item">
          <LocalLibraryIcon className="techvanto-whyus-cloudupload-icon" sx={{color: 'var(--color-secondary)'}} />
          <CountUp end={32} duration={1} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <div className="techvanto-whyus-grid-item-count">
                  <span ref={countUpRef}></span>+
                </div>
              </VisibilitySensor>
            )}
          </CountUp>
          <Typography component="p">
            Total
            <br /> Courses
          </Typography>
        </Item>
      </Grid>

      <Grid item md={3} sm={6} xs={12}>
        <Item className="techvanto-whyus-grid-item">
          <VolunteerActivismTwoToneIcon className="techvanto-whyus-cloudupload-icon" sx={{color: 'var(--color-secondary)'}} />
          <CountUp end={3669} duration={1} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <div className="techvanto-whyus-grid-item-count">
                  <span ref={countUpRef}></span>+
                </div>
              </VisibilitySensor>
            )}
          </CountUp>
          <Typography component="p">
            Promices
            <br /> Delivered
          </Typography>
        </Item>
      </Grid>
    </>
  );
}

export default function WhyUs() {
  return (
    <section className="">
      <br />
      <Typography component="div" className="techvanto-whyus">
        <Typography component="h2" className="techvanto-whyus-heading">
          Why Us
        </Typography>
      </Typography>
      <Grid container spacing={1} className="techvanto-whyus-grid">
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </section>
  );
}
