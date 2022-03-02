import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import "./singleEvent.css";
import { Typography, Card } from "@mui/material";
import { CheckCircle } from "@material-ui/icons";
import singleEventApi from "../../apis/api/SingleEvent";
import './singleEvent.css';

const useStyles = makeStyles({
  root: {
    // input label when focused
    "& label.Mui-focused": {
      color: "#ea395d",
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ea395d",
    },
    // // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#ea395d",
    },
    // // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ea395d",
      },
    },
  },
  sectionPadding: {
    padding: "10px 52px",
  },
});
const SingleEvent = () => {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [name, setName] = useState();
  const [checked, setChecked] = useState(true);
  const [event, setEventData] = useState();
  const params = useParams();
  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if(!event){
      singleEventApi(params.id, setEventData);
    }
  },[]);
  return (
    <>
      <Box
        component="section"
        className="page-heading"
        sx={{
          background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Events.jpg)`,
        }}
      >
        <div className="course-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                Home
                <div className="line"></div>
              </li>
              <li className="breadcrumb-item active">Event</li>
              <li className="breadcrumb-item active">{event?.name}</li>
            </ol>
          </nav>

          <h1 className="event-heading">{event?.name}</h1>
        </div>
      </Box>

      <Box
        component="div"
        sx={{ flexGrow: 1, mt: 2, mb: 2 }}
        className="event-box"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2} xl={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Overview
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <Typography variant="p" sx={{ lineHeight: "28px" }}>
              {event && event.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <Card sx={{ p: 2 }} className="event-form">
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Enter Name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  className={classes.root}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  className={classes.root}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="phone"
                  id="phone"
                  className={classes.root}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  autoComplete="current-phoneNumber"
                />

                <button
                  type="submit"
                  className="btn-grad full-width"
                  style={{ marginTop: "10px" }}
                >
                  Register Now
                </button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default SingleEvent;
