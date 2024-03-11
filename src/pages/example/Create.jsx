// project import
import { Grid, Typography } from "@mui/material";

import FormCreate from "./forms/FormCreate";
import PageCard from "pages/PageCard";

// ================================|| REGISTER ||================================ //

const Create = () => (
  <Grid container rowSpacing={6}>
    <Grid item xs={12}>
      <Typography variant="h2">Create User</Typography>
    </Grid>

    <Grid item xs={12}>
      <PageCard>
        <FormCreate />
      </PageCard>
    </Grid>
  </Grid>
);

export default Create;
