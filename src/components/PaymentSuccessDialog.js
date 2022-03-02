import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Check from "./Check";
import { Button, DialogContent, Typography } from "@mui/material";
import { DialogActions } from "@material-ui/core";
export default function PaymentSuccessDialog(props) {
  const { handleClose, open, message } = props;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <Check />
      </DialogTitle>
      <DialogContent>
        <Typography variant="h4">{message}!</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
