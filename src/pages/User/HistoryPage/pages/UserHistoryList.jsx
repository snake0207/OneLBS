import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'

import { usePostUserHistoryList } from '#/hooks/queries/user'
import SearchFilter from '../Filter'
import { columns } from './grid-columns'

const UserHistoryList = () => {
    const navigate = useNavigate()
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [isAction, setIsAction] = useState(true)
    const [queryParams, setQueryParams] = useState({
        startDate: '',
        endDate: '',
        reqType: 'T',
        userId: '',
        page: 1,
        limit: parseInt(import.meta.env.VITE_LIST_PAGE_LIMIT), // 1회 요청에 받을수 있는 데이터 수
    })
    const { mutate: searchMutate, isPending } = usePostUserHistoryList()

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        setQueryParams({
            ...queryParams,
            ...values,
            page: 1,
        })
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
        console.log('callApi ...')
        console.log('SEND queryParams : ', queryParams)
        isAction &&
            searchMutate(
                { ...queryParams },
                {
                    onSuccess: ({ data }) => {
                        console.log('Search response : ', data)
                        // data.data의 결과값을 확인 후 필요한 처리 수행
                        if (data?.code === '0000') {
                            const { totalCount, lists } = data?.data
                            setFetchData({
                                count: totalCount,
                                lists: [...fetchData.lists, ...lists],
                            })
                        }
                    },
                },
            )
    }, [queryParams])

    console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`사용자 이력관리`} />
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
                        onRowClick={handleSelectRow}
                        pageInit={queryParams.page === 1 ? true : false}
                    />
                </Box>
            )}
        </Box>
    )
}

export default UserHistoryList
