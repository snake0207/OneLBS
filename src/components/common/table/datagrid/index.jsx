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
    width: '100%',
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
    // '& .MuiDataGrid-columnHeaderTitleContainer': {
    //     justifyContent: 'right',
    // },
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
const CustomPagination = ({ onPageChange, pageInit, rowCount }) => {
    const apiRef = useGridApiContext()
    const selector = useGridSelector(apiRef, gridPageSelector)
    const _rowCount = selector * parseInt(import.meta.env.VITE_LIST_PAGE_SIZE)

    // console.log('page : ', selector, rowCount)

    useEffect(() => {
        pageInit && apiRef.current.setPage(0)
    }, [pageInit, apiRef])

    return (
        <GridPagination onClick={() => (_rowCount <= rowCount ? onPageChange(selector) : null)} />
    )
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
    columnGroupingModel = null,
    sort,
    onPageChange,
    onRowClick,
    onRowSelectionChange = null,
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
                pagination: {
                    onPageChange: onPageChange,
                    pageInit: pageInit,
                    rowCount: rowCount,
                },
            }}
            disableColumnMenu={true}
            rows={rows}
            rowCount={rowCount}
            columns={columns}
            experimentalFeatures={{ columnGrouping: true }}
            columnGroupingModel={columnGroupingModel}
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
            onRowSelectionModelChange={
                checkboxSelection ? (param) => onRowSelectionChange(param) : null
            }
            sx={{ ...gridProps }}
        />
    )
}

export default CustomDataGrid
