import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'

import SearchFilter from '../Filter'
import { columns } from './grid-columns'
import { useGetServiceHistory } from '#/hooks/queries/service'
import OllehMap from './OllehMap'

const ServiceHistory = () => {
    const navigate = useNavigate()
    const [isQueryState, setIsQueryState] = useState(false)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const init_pos = {
        longitude: 127.1279874,
        latitude: 37.3998912,
        title: 'KT 분당',
    }
    const [locations, setLocations] = useState([init_pos])
    const [queryParams, setQueryParams] = useState({
        page: 1,
        limit: parseInt(import.meta.env.VITE_LIST_PAGE_LIMIT), // 1회 요청에 받을수 있는 데이터 수
    })
    const { data: apiResult } = useGetServiceHistory(queryParams, {
        enabled: isQueryState,
    })

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        setLocations([])
        setQueryParams({ ...queryParams, ...values, page: 1 })
        setIsQueryState(true)
    }

    // row 클릭한 경우 상세 페이지 노출
    const handleSelectRow = ({ row }) => {
        // console.log('Click row : ', row)
        navigate('/service-status/history/detail', { state: { row } })
    }

    // 지도 맵에서 특정 마커를 클릭한 경우 상세 페이지로 연결
    const handleClickMapMarker = (id) => {
        const record = fetchData.lists.filter((item) => item.id === id)
        // console.log('record : ', { ...record[0] })
        navigate('/service-status/history/detail', { state: { row: record[0] } })
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
        if (isQueryState && apiResult) {
            console.log('apiResult : ', apiResult)
            setIsQueryState(false)
            if (apiResult?.code === '0000') {
                const { totalCount, lists } = apiResult?.data
                setFetchData({ count: totalCount, lists: [...fetchData.lists, ...lists] })
                const nArrs = lists
                    .filter((row) => row.latitude && row.longitude)
                    .map((item) => ({
                        id: item.id,
                        trId: item.trId,
                        latitude: item.latitude,
                        longitude: item.longitude,
                        title: item.resDate,
                    }))
                setLocations(nArrs)
            } else {
                setLocations([init_pos])
            }
        }
    }, [apiResult, queryParams])

    // console.log('locations : ', locations)

    return (
        <Box>
            <TitleBar title={`서비스 이력 조회`} />
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

                {/* 지도 영역 */}

                <Box sx={{ mt: 3, width: '100%', height: '400px' }}>
                    {!isQueryState && locations.length > 0 && (
                        <OllehMap
                            locations={[...locations]}
                            onMarkerClick={(id) => handleClickMapMarker(id)}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default ServiceHistory
