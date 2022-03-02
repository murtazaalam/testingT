import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import logo from "../../assets/images/logo-print-hd-transparent-removebg-preview.png";
import "./basicModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <a href="#need-assistance" className="btn-grad btn-demo">
        {props.text}
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="techvanto-sidebar-logo">
            <img src={`${logo}`} height="100%" width="150px" alt=""></img>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
