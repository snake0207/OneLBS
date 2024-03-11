import PropTypes from "prop-types";

// material-ui
import { Box, Card } from "@mui/material";

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

const PageCard = ({ children, ...other }) => {
  return (
    <Card {...other}>
      <Box
        mt={4}
        mb={4}
        sx={{
          p: { xs: 2, sm: 3, md: 4, xl: 5 },
        }}
      >
        {children}
      </Box>
    </Card>
  );
};

PageCard.propTypes = {
  children: PropTypes.node,
};

export default PageCard;
