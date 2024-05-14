import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'
import { useDashboardStat } from '#/hooks/queries/dashboard'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'
import { Box, TableRow, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts'
import { useEffect, useState } from 'react'
import SearchFilter from '../Filter'
import { columns } from './grid-columns'

const TitleArea = ({ title }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            mb={2}
            sx={{
                backgroundColor: 'darkgray',
            }}
        >
            <PlaylistAddCheckOutlinedIcon />
            <Typography
                sx={{
                    ml: 1,
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'text.darkgray',
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

function DifferentLength() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490]
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300]
    const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G']

    return (
        <LineChart
            width={900}
            height={500}
            series={[
                { data: pData, label: 'pv' },
                { data: uData, label: 'uv' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
                backgroundColor: 'background.contents',
            }}
        />
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

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        setQueryParams({ ...queryParams, ...values, page: 1 })
        setIsQueryState(true)
        // setIsSearchClick(true)
    }

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

    console.log('fetchData : ', fetchData)


    return (
        <Box>
            <TitleBar title={`대시보드`} />
            <SearchFilter onSearch={handleSearch} />
            <Box sx={{ height: '20px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TableRow>
                    <TitleArea title={`위치 조회 트래픽 TOP 5`} />
                    <Box>{DifferentLength()}</Box>
                </TableRow>
                <TableRow>
                    <TitleArea title={`응답 코드 통계 TOP 5`} />
                    <Box>{DifferentLength()}</Box>
                </TableRow>
            </Box>
            <Box sx={{ height: '30px' }} />
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
                        // checkboxSelection={false}
                        rows={fetchData?.lists}
                        rowCount={fetchData?.count}
                        columns={columns}
                        sort={{ field: 'id', orderby: 'desc' }}
                        onPageChange={handleOnPageChange}
                        pageInit={queryParams.page === 1 ? true : false}
                    />
                </Box>
            )}
        </Box>
    )
}

export default Dashboard
