import PropTypes from "prop-types";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Grid } from "@mui/material";

const MuiToolbar = ({ children, tools }) => {
  return (
    <GridToolbarContainer>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-end"
        rowSpacing={1}
      >
        {children && (
          <Grid item sm={12} md={8.2}>
            {children}
          </Grid>
        )}
        {tools && (
          <Grid item sm={12} md={3.4} textAlign="right">
            {tools.includes("column") && <GridToolbarColumnsButton />}
            {tools.includes("filter") && <GridToolbarFilterButton />}
            {tools.includes("export") && (
              <GridToolbarExport
                printOptions={{ disableToolbarButton: true }}
              />
            )}
          </Grid>
        )}
      </Grid>
    </GridToolbarContainer>
  );
};

MuiToolbar.propTypes = {
  children: PropTypes.node,
  tools: PropTypes.arrayOf(PropTypes.string), // ["column", "filter", "export"]
};

export default MuiToolbar;
