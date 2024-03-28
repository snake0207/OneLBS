import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

/**
 * 
 * @param {*} Object - Alert 파라미터
 * @param { string } Object.severity - error | info | success | warning
 * @param { string } Object.msg - Display 메시지
 * @param { number } Object.autoHideDuration - 메시지 노출 시간(초). 시간 지나면 없어짐
 * @param { function } Object.callback - 
 * @returns 
 */
const MuiAlert = ({ severity = "success", msg, autoHideDuration = 0, callback }) => {
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
