import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const MuiProgressWithValueLabel = ({ size = 40, message }) => {
  return (
    <Box height="100%">
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress
          size={size}
          disableShrink
          thickness={6}
          sx={{ color: "primary.light" }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant={size > 40 ? "h4" : "caption"}
            component="div"
            sx={{ color: "secondary.main" }}
          >
            {message ? message : "Loading data..."}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

MuiProgressWithValueLabel.propTypes = {
  size: PropTypes.number,
  message: PropTypes.string,
};

export default MuiProgressWithValueLabel;
