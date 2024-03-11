// material-ui
import { Box } from "@mui/material";

// project import
import Profile from "./Profile";
import Notification from "./Notification";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Notification />
      <Profile />
    </Box>
  );
};

export default HeaderContent;
