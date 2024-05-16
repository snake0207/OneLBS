import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'
import { useDashboardStat } from '#/hooks/queries/dashboard'

import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'
import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import SearchFilter from '../Filter'
import { columns } from './grid-columns'
import ResponseCodeStat from './RespCodeStat'
import LocationLookUpStat from './LocationLookUpStat'

const TitleArea = ({ title }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            mb={0.5}
            sx={{
                backgroundColor: '#009ACC',
                border: '1px solid darkgray',
            }}
        >
            <PlaylistAddCheckOutlinedIcon />
            <Typography
                sx={{
                    ml: 1,
                    fontSize: '21px',
                    fontWeight: 500,
                    color: '#ffff',
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

function Dashboard() {
    const [isQueryState, setIsQueryState] = useState(false)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [queryParams, setQueryParams] = useState({
        page: 1,
        limit: parseInt(import.meta.env.VITE_LIST_PAGE_LIMIT),
    })
    const { data: apiResult } = useDashboardStat(queryParams, {
        enabled: isQueryState,
    })

    // row 클릭한 경우 상세 페이지 노출
    // eslint-disable-next-line no-empty-pattern
    const handleSelectRow = ({ }) => { }

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        const { renewalCycle, date, ...restValues } = values // renewalCycle, date 제외한 나머지 값들을 restValues에 복사
        setQueryParams({ ...queryParams, ...restValues, page: 1 })
        setIsQueryState(true)
    }

    // console.log('queryParams: ', queryParams)

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
        if (isQueryState && apiResult && apiResult.code === '0000' && apiResult.data) {
            const { totalCount, lists } = apiResult.data
            setIsQueryState(false)
            setFetchData((prevData) => ({
                count: totalCount,
                lists: [...prevData.lists, ...lists],
            }))
        }
    }, [isQueryState, apiResult])

    // console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`대시보드`} />
            <SearchFilter onSearch={handleSearch} />
            <Box sx={{ height: '20px' }} />
            <Table>
                <TableBody>
                    <TableRow sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <TableCell>
                            <TitleArea title={`위치 조회 트래픽 TOP 5`} />
                            <Box sx={{ border: '1px solid darkgray' }}>{LocationLookUpStat()}</Box>
                        </TableCell>
                        <TableCell>
                            <TitleArea title={`응답 코드 통계 TOP 5`} />
                            <Box sx={{ border: '1px solid darkgray' }}>{ResponseCodeStat()}</Box>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Typography sx={{ height: '15px' }} />
            {fetchData && (
                <Box
                    sx={{
                        width: '100%',
                        borderRadius: '8px',
                        p: '18px 20px',
                        backgroundColor: 'background.contents',
                        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                    }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography
                            sx={{ fontSize: '14px' }}
                        >{`Total Count: ${fetchData?.count}`}</Typography>
                    </Box>
                    <CustomDataGrid
                        rows={fetchData?.lists}
                        rowCount={fetchData?.count}
                        columns={columns}
                        sort={{ field: 'id', orderby: 'desc' }}
                        onPageChange={handleOnPageChange}
                        onRowClick={handleSelectRow}
                        activeTools={['export']}
                        pageInit={queryParams.page === 1 ? true : false}
                    />
                </Box>
            )}
        </Box>
    )
}

export default Dashboard
