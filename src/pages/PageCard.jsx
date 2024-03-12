import PropTypes from "prop-types";

// material-ui
import { Box, Card, Grid, Typography } from "@mui/material";

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

const PageCard = ({ children, ...other }) => {
  console.log(children, other);

  return (
    <Grid container rowSpacing={6}>
      <Grid item xs={12}>
        <Typography variant="h2">{other.title}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ maxHeight: "850px" }} raised>
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
      </Grid>
    </Grid>

    // <Card {...other}>
    //   <Box
    //     mt={4}
    //     mb={4}
    //     sx={{
    //       p: { xs: 2, sm: 3, md: 4, xl: 5 },
    //     }}
    //   >
    //     {children}
    //   </Box>
    // </Card>
  );
};

PageCard.propTypes = {
  children: PropTypes.node,
};

export default PageCard;
