import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'
import { useGetLocViewList } from '#/hooks/queries/system'

import SearchFilter from '../Filter'
import { columns } from './grid-columns'

const LocViewList = () => {
    const navigate = useNavigate()
    const [isSearchClick, setIsSearchClick] = useState(true)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [queryParams, setQueryParams] = useState({
        start_date: '',
        end_date: '',
        page: 1,
        limit: 50, // 1회 요청에 받을수 있는 데이터 수
    })
    const { data: apiResult } = useGetLocViewList(queryParams, {
        enabled: true,
    })

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        setIsSearchClick((prev) => !prev)
        setQueryParams({ ...queryParams, ...values, page: 1 })
    }

    // row 클릭한 경우 상세 페이지 노출
    const handleSelectRow = ({ row }) => { }

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
        }
    }, [apiResult, isSearchClick])

    console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`위치이력 열람 내역`} />
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
                    <CustomDataGrid
                        checkboxSelection={false}
                        rows={fetchData?.lists}
                        rowCount={fetchData?.count}
                        columns={columns}
                        sort={{ field: 'id', orderby: 'desc' }}
                        onPageChange={handleOnPageChange}
                        onRowClick={handleSelectRow}
                        pageInit={queryParams.page === 1 ? true : false}
                    />
                </Box>
            )}
        </Box>
    )
}

export default LocViewList
