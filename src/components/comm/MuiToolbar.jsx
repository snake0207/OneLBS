import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const MuiToolbar = ({ children, tools }) => {
  return (
    <Box>
      <GridToolbarContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children && (
          <Box flex={7} textAlign="left">
            {children}
          </Box>
        )}
        {tools && (
          <Box flex={4} textAlign="right">
            {tools.includes("column") && <GridToolbarColumnsButton />}
            {tools.includes("filter") && <GridToolbarFilterButton />}
            {tools.includes("export") && (
              <GridToolbarExport
                printOptions={{ disableToolbarButton: true }}
              />
            )}
          </Box>
        )}
      </GridToolbarContainer>
    </Box>
  );
};

MuiToolbar.propTypes = {
  children: PropTypes.node,
  tools: PropTypes.arrayOf(PropTypes.string), // ["column", "filter", "export"]
};

export default MuiToolbar;
