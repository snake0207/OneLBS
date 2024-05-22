import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'

import { useGetFacilitySyncHistory } from '#/hooks/queries/facility'
import SearchFilter from '../Filter'
import { columns } from './grid-columns'

const SyncHistory = () => {
    const navigate = useNavigate()
    const [isQueryState, setIsQueryState] = useState(true)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [queryParams, setQueryParams] = useState({
        type: 'T',
        page: 1,
        limit: 50, // 1회 요청에 받을수 있는 데이터 수
    })
    const { data: apiResult } = useGetFacilitySyncHistory(queryParams, {
        enabled: isQueryState,
    })

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        setQueryParams({ ...queryParams, ...values, page: 1 })
        setIsQueryState(true)
    }

    // row 클릭한 경우 상세 페이지 노출
    const handleSelectRow = ({ row }) => { }

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
                const { totalCount, lists } = apiResult?.data
                setIsQueryState(false)
                setFetchData({ count: totalCount, lists: [...fetchData.lists, ...lists] })
            }
        }
    }, [apiResult, queryParams])

    console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`정보 현행화 이력`} />
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
                    columns={columns}
                    sort={{ field: 'id', orderby: 'desc' }}
                    onPageChange={handleOnPageChange}
                    onRowClick={handleSelectRow}
                    // activeTools={['export', 'column']}
                    pageInit={queryParams.page === 1 ? true : false}
                />
            </Box>
        </Box>
    )
}

export default SyncHistory
