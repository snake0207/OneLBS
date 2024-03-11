import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

const PaperComponent = (props) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper ref={nodeRef} {...props} sx={{ minWidth: "60%" }} />
    </Draggable>
  );
};

const MuiDialog = ({
  draggable = true,
  title,
  content,
  onCancel,
  onConfirm,
}) => {
  const [open, setOpen] = useState(true);

  const handleCancel = () => {
    setOpen(false);
    onCancel();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      PaperComponent={draggable && PaperComponent}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="draggable-dialog-title"
        children={<Typography>{title}</Typography>}
        style={{ cursor: draggable && "move" }}
      />
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button size="large" color="error" onClick={handleCancel}>
          No
        </Button>
        <Button
          size="large"
          color="primary"
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
          autoFocus
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MuiDialog;
