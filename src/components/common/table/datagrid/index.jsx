import {
    DataGrid,
    GridPagination,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid'
import { LinearProgress } from '@mui/material'
import { useEffect } from 'react'
import CustomToolbar from '#/components/common/table/toolbar'

const gridProps = {
    height: '720px',
    backgroundColor: '#FFFFFF',
    border: 'none',
    '& .MuiDataGrid-sortIcon': {
        color: 'white',
    },
    '& .MuiDataGrid-columnHeaders': {
        color: 'white',
        fontSize: '15px',
        backgroundColor: '#009ACC',
    },
    '& .MuiDataGrid-cell': {
        borderBottom: `1px solid `,
        borderBottomColor: '#d1d1d1',
        color: '#444444',
    },
    '& .MuiDataGrid-cell:focus': {
        outline: 'none',
    },
    '& .MuiDataGrid-row:hover': {
        cursor: 'pointer',
        backgroundColor: '#e6e7e9',
    },
    '& .MuiTypography-root': {
        fontSize: '14px',
    },
}

// list 하단의 페이징 표시 영역
const CustomPagination = ({ onPageChange, pageInit }) => {
    const apiRef = useGridApiContext()
    const selector = useGridSelector(apiRef, gridPageSelector)

    useEffect(() => {
        pageInit && apiRef.current.setPage(0)
    }, [pageInit, apiRef])

    return <GridPagination onClick={() => onPageChange(selector)} />
}
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
const CustomDataGrid = ({
    loading,
    checkboxSelection = false,
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
    return (
        <DataGrid
            loading={loading}
            checkboxSelection={checkboxSelection}
            slots={{
                toolbar: CustomToolbar,
                pagination: CustomPagination,
                loadingOverlay: LinearProgress,
            }}
            slotProps={{
                toolbar: {
                    children: component,
                    tools: activeTools,
                },
                pagination: { onPageChange: onPageChange, pageInit: pageInit },
            }}
            disableColumnMenu={true}
            rows={rows}
            rowCount={rowCount}
            columns={columns}
            rowHeight={48}
            initialState={{
                sorting: {
                    sortModel: [{ field: sort.field, sort: sort.orderby }],
                },
                pagination: {
                    paginationModel: {
                        pageSize: parseInt(import.meta.env.VITE_LIST_PAGE_SIZE) || 10,
                    },
                },
            }}
            pageSizeOptions={[parseInt(import.meta.env.VITE_LIST_PAGE_SIZE) || 10]}
            // params.row.필드명
            // row에 별도의 동작 버튼을 둔 경우, 아래는 동작 안하도록 처리 필요
            onRowClick={(params) => onRowClick(params)}
            sx={{ ...gridProps }}
        />
    )
}

export default CustomDataGrid
