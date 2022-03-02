import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import { makeStyles } from "@material-ui/core/styles";
import RegisterApi from "../../../apis/api/SignUp";
import ButtonLoader from "../../../assets/images/button_loader.gif";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/slices/auth.slices";

const useStyles = makeStyles((theme) => ({
  btnSignUp: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const theme = createTheme();

export default function SignUp({ classess }) {
  const [error, setError] = useState("");
  const [name, validateName] = useState(false);
  const [email, validateEmail] = useState(false);
  const [mobile, validateMobile] = useState(false);
  const [password, validatePassword] = useState(false);
  const [message, validationMessage] = useState("");
  const [confirmPass, confirmPassword] = useState(false);
  const [loader, setLoader] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setPass] = useState();
  let dispatch = useDispatch();
  const classes = useStyles();

  const validation = (event) => {
    let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (event.target.name === "name") {
      if (event.target.value == "") {
        return validateName(true);
      }
      validateName(false);
    }
    if (event.target.name === "email") {
      if (!event.target.value.match(emailValidate)) {
        return validateEmail(true);
      }
      validateEmail(false);
    }
    if (event.target.name === "mobile") {
      if (
        event.target.value.length !== 10 ||
        event.target.value == "" ||
        !Number(event.target.value)
      ) {
        return validateMobile(true);
      }
      validateMobile(false);
    }
    if (event.target.name === "password") {
      let strongPassword =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
      setPass(event.target.value);
      if (event.target.value == "") {
        validatePassword(true);
        return validationMessage("Enter Password");
      }
      if (!event.target.value.match(strongPassword)) {
        validatePassword(true);
        return validationMessage(
          "Password must contain at least one numeric, one uppercase, one lowercase and one special character"
        );
      }
      validatePassword(false);
    }
    if (event.target.name === "repassword") {
      if (event.target.value !== pass) {
        return confirmPassword(true);
      }
      confirmPassword(false);
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoader(true);
    setError("");
    // eslint-disable-next-line no-console
    let body = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("mobile"),
      password: data.get("password"),
    };
    if (!body.name || !body.email || !body.phone || !body.password) {
      setLoader(false);
      return setError("Star Fields Are Required");
    }
    if (
      name === false &&
      email === false &&
      mobile === false &&
      password === false &&
      confirmPass === false
    ) {
      try{
        let res = await RegisterApi(body, setError, setLoader);
        if(res){
          if (res.message === "Registration Success") {
            toast.success("Registration Success", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            dispatch(loginAction({admin:res.user,isLogin:true}));
        }
        }
        
      }catch(err){

      }
    } else {
      setLoader(false);
      return setError("Star Fields Are Required");
    }
    //RegisterApi(body, setError, setLoading);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, borderRadius: "0", background: "white" }}>
            <img src="https://i.ibb.co/jVR0Kyc/logo-3.png" alt=""></img>
          </Avatar>
          <Typography component="h1" variant="h5">
            SignUp
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "error.dark",
            }}
          >
            {error}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e) => validation(e)}
                  error={name}
                  helperText={name ? "Enter Your Name." : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classess.root}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => validation(e)}
                  error={email}
                  helperText={email ? "Invalid Email." : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classess.root}
                  required
                  fullWidth
                  type="number"
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="mobile"
                  onChange={(e) => validation(e)}
                  error={mobile}
                  helperText={mobile ? "Invalid Mobile Number." : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => validation(e)}
                  error={password}
                  helperText={password ? message : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  required
                  fullWidth
                  name="repassword"
                  label="Re Enter Password"
                  type="password"
                  id="re-password"
                  autoComplete="re-password"
                  onChange={(e) => validation(e)}
                  error={confirmPass}
                  helperText={confirmPass ? "Password does not match." : ""}
                />
              </Grid>
            </Grid>
            <button
              style={
                loader
                  ? { backgroundColor: "var(--color-disable)" }
                  : { backgroundColor: "var(--color-secondary)" }
              }
              className={`btn-grad full-width ${classes.btnSignUp}`}
              disabled={loader ? true : false}
            >
              {loader ? <img src={ButtonLoader} width="80" /> : "SignUp"}
            </button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
