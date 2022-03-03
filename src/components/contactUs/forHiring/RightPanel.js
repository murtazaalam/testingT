import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { toast } from "react-toastify";
import ButtonLoader from "../../../assets/images/button_loader.gif";
import addHiringApi from "../../../apis/api/Hiring";
import addPlacementApi from "../../../apis/api/Placement";
import "./rightPanel.css";

function RightPanel({formType}) {
  const [loader, setLoader] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    profile: [data[1].title],
  });

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

  const submitForm = async(e) => {
    e.preventDefault();
    setLoader(true);
    if(nameError === false && 
      emailError === false && 
      phoneError === false)
    {
      let res;
      formType === "hiring" ?  res = await addHiringApi(info, setLoader) : 
      res = await addPlacementApi(info, setLoader)

      if(res){
        if(res === "Applied Successfully"){
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
        else if(res === "Already Applied"){
          toast.error(res, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    }
    else{
      setLoader(false);
    }
  };
  
  const getProfileArray = (event, value) => {
    event.preventDefault();
    setInfo({
      ...info,
      profile:value
    });
  }
  return (
    <>
      <form onSubmit={submitForm} className="right-panel-form">
        <FormControl className="input-margin">
          <InputLabel htmlFor="name" error={nameError}>Enter Your Good Name</InputLabel>
          <OutlinedInput
            id="name"
            value={info.name}
            onChange={(e) => formValidate(e.target)}
            label="Enter Your Good Name"
            name="name"
            error={nameError}
            required
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className="input-margin">
          <InputLabel htmlFor="email" error={emailError}>Email Address</InputLabel>
          <OutlinedInput
            id="email"
            value={info.email}
            name="email"
            onChange={(e) => formValidate(e.target)}
            label="Email Address"
            error={emailError}
            required
            endAdornment={
              <InputAdornment position="end">
                <EmailIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className="input-margin">
          <InputLabel htmlFor="phoneNo" error={phoneError}>Mobile number</InputLabel>
          <OutlinedInput
            id="phonNo"
            value={info.phone}
            onChange={(e) => formValidate(e.target)}
            label="phone number"
            name="phone"
            type="number"
            error={phoneError}
            required
            endAdornment={
              <InputAdornment position="end">
                <PhoneAndroidIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className="input-margin">
          <Autocomplete
            multiple
            id="tags-filled"
            onChange={getProfileArray}
            options={data.map((option) => option.title)}
            defaultValue={[data[1].title]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <>
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
                </>
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Profiles"
                placeholder="Job Profiles "
                value={info.profile}
              />
            )}
          />
        </FormControl>

        <button 
          className="btn-grad btn-inner-alignment"
          style={loader ? {backgroundColor: 'var(--color-disable)'} : {backgroundColor: 'var(--color-secondary)'}}
          disabled={loader ? true : false}
        >
          {loader ? <img src={ButtonLoader} width="80" /> : 'Submit'}
        </button>
      </form>
    </>
  );
}

export default RightPanel;
const data = [
  { title: "Full Stack Developer" },
  { title: "Software Developer" },
  { title: "Machine Learning Engg" },
  { title: "Graduate Trainee" },
];
