import {
  DataGrid,
  GridPagination,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { Box, LinearProgress } from "@mui/material";
import MuiToolbar from "./MuiToolbar";
import { useEffect } from "react";

const gridBoxProps = {
  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: `primary.light`,
  },
};

const gridProps = {
  height: "720px",
  "& .MuiDataGrid-columnHeaders": {
    color: "secondary.darker",
    marginTop: "8px",
    fontSize: "15px",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: `1px solid `,
    borderBottomColor: "secondary.200",
    color: "secondary.main",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-row:hover": {
    cursor: "pointer",
    backgroundColor: "secondary.200",
  },
};

const CustomPagination = ({ onPageChange, pageInit }) => {
  const apiRef = useGridApiContext();
  const selector = useGridSelector(apiRef, gridPageSelector);

  useEffect(() => {
    pageInit && apiRef.current.setPage(0);
  }, [pageInit, apiRef]);

  return <GridPagination onClick={() => onPageChange(selector)} />;
};
/**
 * table 형태의 목록 정보를 보여준다
 *
 * @component
 * @example
 * const loading = false
 * const rows = [{}, {}]
 * const columns = {}
 * return (
 *   <DataGrid {...props} />
 * )
 */
const MuiDataGrid = ({
  loading,
  rows,
  rowCount,
  columns,
  sort,
  onPageChange,
  onRowClick,
  component,
  activeTools,
  pageInit,
}) => {
  //
  // console.log("apiCall : ", apiCall);
  //

  return (
    <Box sx={{ ...gridBoxProps }}>
      <DataGrid
        loading={loading}
        slots={{
          toolbar: MuiToolbar,
          pagination: CustomPagination,
          loadingOverlay: LinearProgress,
        }}
        slotProps={{
          toolbar: { children: component, tools: activeTools },
          pagination: { onPageChange: onPageChange, pageInit: pageInit },
        }}
        disableColumnMenu={true}
        rows={rows}
        rowCount={rowCount}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: [{ field: sort.field, sort: sort.orderby }],
          },
          pagination: {
            paginationModel: {
              pageSize: parseInt(process.env.REACT_APP_PAGESIZE),
            },
          },
        }}
        pageSizeOptions={[parseInt(process.env.REACT_APP_PAGESIZE)]}
        // params.row.필드명
        // row에 별도의 동작 버튼을 둔 경우, 아래는 동작 안하도록 처리 필요
        onRowClick={(params) => onRowClick(params)}
        sx={{ ...gridProps }}
      />
    </Box>
  );
};

export default MuiDataGrid;
