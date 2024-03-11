import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const MuiAlert = ({ severity, msg, autoHideDuration = 0, callback }) => {
  const [autoClose, setAutoClose] = useState(false);

  const handleReset = () => {
    setAutoClose(true);
    callback();
  };

  autoHideDuration > 0 && setTimeout(() => handleReset(), autoHideDuration);

  return (
    !autoClose && (
      <Box position="fixed" bottom={10} minWidth={"400px"}>
        <Alert
          variant="filled"
          severity={severity}
          action={
            !autoHideDuration && (
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleReset}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            )
          }
        >
          {msg}
        </Alert>
      </Box>
    )
  );
};

export default MuiAlert;
