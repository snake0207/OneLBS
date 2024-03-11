// material-ui
import { Grid, Typography } from "@mui/material";

// project import
// import OrdersTable from "./OrdersTable";
import PageCard from "pages/PageCard";
import FormList from "./forms/FormList";

// ==============================|| LIST - DEFAULT ||============================== //

const List = () => {
  return (
    <Grid container rowSpacing={6}>
      <Grid item xs={12}>
        <Typography variant="h2">Favorite Movies...</Typography>
      </Grid>

      <Grid item xs={12}>
        <PageCard sx={{ maxHeight: "850px" }}>
          <FormList />
        </PageCard>
      </Grid>
    </Grid>
  );
};

export default List;
