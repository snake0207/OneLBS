import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'
import { useGetUes, usePostUeDelete } from '#/hooks/queries/system'

import SearchFilter from '../Filter'
import { columns } from './grid-columns'
import { MuiSubButton } from '#/components/common/button/MuiButton'
import MuiDialog from '#/components/common/popup/MuiDialog'

const UeModelList = () => {
    const navigate = useNavigate()
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const [isSearchClick, setIsSearchClick] = useState(true)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [queryParams, setQueryParams] = useState({
        ueName: '',
        ueCode: '',
        page: 1,
        limit: 50, // 1회 요청에 받을수 있는 데이터 수
    })
    const { data: apiResult } = useGetUes(queryParams, {
        enabled: true,
    })
    const { mutate, isPending } = usePostUeDelete()

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        setIsSearchClick((prev) => !prev)
        setQueryParams({ ...queryParams, ...values, page: 1 })
    }

    // row 클릭한 경우 상세 페이지 노출
    const handleSelectRow = ({ row }) => {
        navigate('/system/ue/edit', { state: { row: row } })
    }

    // 리스트 하단의 페이지 이동 버튼 click시 동작
    const handleOnPageChange = (currPage) => {
        const pageSize = parseInt(import.meta.env.VITE_LIST_PAGE_SIZE)
        const rowCount = (currPage + 1) * pageSize

        if (currPage > 0 && rowCount >= fetchData.lists.length) {
            setQueryParams({ ...queryParams, page: queryParams.page + 1 })
        }
    }

    const handleDeleteRows = () => {
        console.log('Delete Checked list...')
        setOpenDeleteDialog(false)
        // const deleteParams = []
        // mutate(
        //     {},
        //     {
        //         onSuccess: ({ data }) => {
        //             console.log('response : ', data)
        //         },
        //     },
        // )
        // API 호출
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
            <TitleBar title={`단말 모델 관리`} />
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
                        >{`Total Count: ${fetchData.count}`}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                            <MuiSubButton
                                disabled={isPending}
                                name="delete"
                                title="선택 삭제"
                                onClick={() => setOpenDeleteDialog(true)}
                            />
                            <MuiSubButton
                                disabled={isPending}
                                name="create"
                                title="모델 등록"
                                onClick={() =>
                                    navigate('/system/ue/regist', { state: { row: 'acro0720' } })
                                }
                            />
                        </Box>
                    </Box>
                    <CustomDataGrid
                        checkboxSelection={true}
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
            {openDeleteDialog && (
                <MuiDialog
                    isOpen={openDeleteDialog}
                    content={state.msg}
                    onCancel={() => setOpenDeleteDialog(false)}
                    onConfirm={handleDeleteRows}
                />
            )}
        </Box>
    )
}

export default UeModelList
