import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Widget } from "./Widget";
import { Box, Button } from "@material-ui/core";
import React from "react";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{ border: "1px solid black", transform: "scale(2)" }}
        onClick={handleOpen}
      >
        Open exchanger
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Widget></Widget>
        </Box>
      </Modal>
    </div>
  );
}
