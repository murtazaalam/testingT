import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./singleEvent.css";
import { Typography, Card } from "@mui/material";
import singleEventApi from "../../apis/api/SingleEvent";
import addEventApi from "../../apis/api/AddEvent";
import ButtonLoader from "../../assets/images/button_loader.gif";
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
  const [allError, setAllError] = useState();
  const [event, setEventData] = useState();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [loader, setLoader] = useState(false);
  const params = useParams();

  let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if(!event){
      singleEventApi(params.id, setEventData);
    }
  },[]);

  const formValidate = (event) => {
    if (event.name === "name") {
      setInfo({ ...info, name: event.value });
      if(event.value == "") return setNameError(true);
      setNameError(false);
    }
    if (event.name === "email") {
      setInfo({ ...info, email: event.value });
      if(event.value == "" || !event.value.match(emailValidate)) return setEmailError(true);
      setEmailError(false);
    }
    if (event.name === "phone") {
      setInfo({ ...info, phone: event.value });
      if(event.value != "" && event.value.length === 10) return setPhoneError(false);
      setPhoneError(true);
    }
    
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    setAllError("");
    setLoader(true);
    if(!info.name || !info.email || !info.phone ){
      setAllError("Start fields are required.");
      setLoader(false);
      return;
    }
    else{
      if(nameError === false && 
        emailError === false && 
        phoneError === false)
      {
        let res = await addEventApi(info, setLoader)
        toast.success(res, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      else{
        setLoader(false);
      }
    }
    
  }
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
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <p className="all-error">{allError}</p>
                <TextField
                  margin="normal"
                  required
                  error={nameError}
                  fullWidth
                  id="name"
                  label="Enter Name"
                  name="name"
                  autoComplete="name"
                  helperText={nameError ? "Enter Your Name." : ""}
                  value={info.name}
                  className={classes.root}
                  onChange={(e) => formValidate(e.target)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  error={emailError}
                  helperText={emailError ? "Invalid Email." : ""}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={info.email}
                  className={classes.root}
                  onChange={(e) => formValidate(e.target)}
                />

                <TextField
                  margin="normal"
                  required
                  error={phoneError}
                  helperText={phoneError ? "Invalid Phone Number." : ""}
                  fullWidth
                  name="phone"
                  label="phone"
                  type="number"
                  id="phone"
                  className={classes.root}
                  value={info.phone}
                  onChange={(e) => formValidate(e.target)}
                  autoComplete="current-phoneNumber"
                />

                <button
                  type="submit"
                  className="btn-grad full-width event-register"
                  style={loader ? {backgroundColor: 'var(--color-disable)'} : {backgroundColor: 'var(--color-secondary)'}}
                  disabled={loader ? true : false}
                >
                  {loader ? <img src={ButtonLoader} width="80" /> : 'Register Now'}
                  
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
