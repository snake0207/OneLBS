import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'

import SearchFilter from '../Filter'
import { columns } from './grid-columns'
import { useGetServiceSubStat } from '#/hooks/queries/service'

const filterColumns = (params) => {
    console.log('params : ', params)
    const _displayColumns = [
        { field: 'id', headerName: 'ID', view: true },
        { field: 'statDate', headerName: '통계일', view: true },
        { field: 'service', headerName: '서비스 코드', view: params.serviceCheck },
        { field: 'appId', headerName: 'APP ID', view: params.appIdCheck },
        { field: 'model', headerName: '단말 모델', view: params.modelCheck },
        { field: 'opType', headerName: 'OP Type', view: params.opTypeCheck },
        // { field: 'posInit', headerName: 'Pos INIT', view: params.posInitCheck },
        { field: 'plane', headerName: 'Plane', view: params.planeCheck },
        { field: 'posMethod', headerName: '측위 방식', view: params.posMethodCheck },
        { field: 'respCode', headerName: '응답코드', view: params.respCodeCheck },
        { field: 'count', headerName: '전체', view: true },
        { field: 'successCnt', headerName: '성공', view: true },
        { field: 'successRate', headerName: '성공률(%)', view: true },
        { field: 'elapsedTime', headerName: '평균응답(초)', view: true },
    ]

    let booleanCnt = 0
    for (let obj of _displayColumns) {
        if (obj.view !== false) booleanCnt++
    }
    console.log('booleanCnt : ', booleanCnt)
    if (booleanCnt > 6) return _displayColumns.filter((item) => item.view)

    for (let obj of _displayColumns) obj.view = true
    return _displayColumns
    // return _displayColumns.filter((item) => item.view)
}

const ServiceStat = () => {
    const navigate = useNavigate()
    const [isQueryState, setIsQueryState] = useState(false)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [queryParams, setQueryParams] = useState({
        page: 1,
        limit: parseInt(import.meta.env.VITE_LIST_PAGE_LIMIT), // 1회 요청에 받을수 있는 데이터 수
    })
    const { data: apiResult } = useGetServiceSubStat(queryParams, {
        enabled: isQueryState,
    })

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        setQueryParams({ ...queryParams, ...values, page: 1 })
        setIsQueryState(true)
    }

    // row 클릭한 경우 상세 페이지 노출
    const handleSelectRow = ({ row }) => {}

    // 리스트 하단의 페이지 이동 버튼 click시 동작
    const handleOnPageChange = (currPage) => {
        const pageSize = parseInt(import.meta.env.VITE_LIST_PAGE_SIZE)
        const rowCount = (currPage + 1) * pageSize

        if (currPage > 0 && rowCount >= fetchData.lists.length) {
            setQueryParams({ ...queryParams, page: queryParams.page + 1 })
            setIsQueryState(true)
        }
    }

    useEffect(() => {
        if (isQueryState && apiResult) {
            if (apiResult?.code === '0000') {
                console.log('filter : ', filterColumns(queryParams))
                const { totalCount, lists } = apiResult?.data
                setIsQueryState(false)
                setFetchData({ count: totalCount, lists: [...fetchData.lists, ...lists] })
            }
        }
    }, [apiResult, queryParams])

    console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`서비스 세부 통계`} />
            <SearchFilter onSearch={handleSearch} />
            <Box
                sx={{
                    width: '100%',
                    borderRadius: '8px',
                    p: '18px 20px',
                    backgroundColor: 'background.contents',
                    boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                }}
            >
                <Box display="flex" justifyContent="flex-start" alignItems="center">
                    <Typography
                        sx={{ fontSize: '14px' }}
                    >{`Total Count: ${fetchData.count}`}</Typography>
                </Box>

                <CustomDataGrid
                    rows={fetchData?.lists}
                    rowCount={fetchData?.count}
                    columns={fetchData?.count ? filterColumns(queryParams) : columns}
                    sort={{ field: 'id', orderby: 'desc' }}
                    onPageChange={handleOnPageChange}
                    onRowClick={handleSelectRow}
                    activeTools={['export']}
                    pageInit={queryParams.page === 1 ? true : false}
                />
            </Box>
        </Box>
    )
}

export default ServiceStat
