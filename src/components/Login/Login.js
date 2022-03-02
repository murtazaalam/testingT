import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/system";
import LoginContent from "./Content/LoginContent";
import SignUp from "./Content/SignUpContent";
import { makeStyles } from "@material-ui/core/styles";
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
});

function Login({ open, handleClose, PaperComponent }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    console.log("helo");
    setValue(newValue);
  };
  const handleTabChange = () => {
    console.log("helo000");
  }

  return (
    <div>
      {" "}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  sx={{ textTransform: "capitalize" }}
                  label="Login"
                  value="1"
                  onChange={handleTabChange}
                />
                <Tab
                  sx={{ textTransform: "capitalize" }}
                  label="Signup"
                  value="2"
                  onChange={handleTabChange}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <LoginContent classes={classes} handleClose={handleClose} />
            </TabPanel>
            <TabPanel value="2">
              <SignUp classess={classes} />
            </TabPanel>
        </TabContext>
      </Dialog>
    </div>
  );
}

export default Login;
