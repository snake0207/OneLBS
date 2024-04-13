import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'

import SearchFilter from '../Filter'
import { columns } from './grid-columns'
import { useGetServiceHistory, useGetServiceStat } from '#/hooks/queries/one-service'
import { OllehMap } from '#/components/common/map/ollehMap'
import { LabelImportantRounded } from '@mui/icons-material'

const ServiceHistory = () => {
    const navigate = useNavigate()
    const [isSearchClick, setIsSearchClick] = useState(true)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [locations, setLocations] = useState([])
    const [queryParams, setQueryParams] = useState({
        page: 1,
        limit: 50, // 1회 요청에 받을수 있는 데이터 수
    })
    const { data: apiResult } = useGetServiceHistory(queryParams, {
        enabled: true,
    })

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        setLocations([])
        setIsSearchClick((prev) => !prev)
        setQueryParams({ ...queryParams, ...values, page: 1 })
    }

    // row 클릭한 경우 상세 페이지 노출
    const handleSelectRow = ({ row }) => {
        console.log('row : ', row)
        navigate('/service-status/history/detail', { state: { row } })
    }

    // 지도 맵에서 특정 마커를 클릭한 경우 상세 페이지로 연결
    const handleClickMapMarker = (id) => {
        const record = fetchData.lists.filter((item) => item.id === id)
        console.log('record : ', { ...record[0] })
        navigate('/service-status/history/detail', { state: { row: record[0] } })
    }

    // 리스트 하단의 페이지 이동 버튼 click시 동작
    const handleOnPageChange = (currPage) => {
        const pageSize = parseInt(import.meta.env.VITE_LIST_PAGE_SIZE)
        const rowCount = (currPage + 1) * pageSize

        if (currPage > 0 && rowCount >= fetchData.lists.length) {
            setQueryParams({ ...queryParams, page: queryParams.page + 1 })
        }
    }

    useEffect(() => {
        if (apiResult) {
            const { count, lists } = apiResult
            setFetchData({ count: count, lists: [...fetchData.lists, ...lists] })
            const nArrs = lists.map((item) => {
                // const { latitude, longitude, posMethod: title } = item
                return {
                    id: item.id,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    title: item.posMethod,
                }
            })
            setLocations(nArrs)
        }
    }, [apiResult, isSearchClick])

    console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`서비스 이력 조회`} />
            <SearchFilter onSearch={handleSearch} />
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
                    <Box display="flex" justifyContent="flex-start" alignItems="center">
                        <Typography
                            sx={{ fontSize: '14px' }}
                        >{`Total Count: ${fetchData.count}`}</Typography>
                    </Box>

                    <CustomDataGrid
                        checkboxSelection={false}
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
                        {fetchData.count > 0 && (
                            <OllehMap
                                locations={[...locations]}
                                onMarkerClick={(id) => handleClickMapMarker(id)}
                            />
                        )}
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default ServiceHistory
