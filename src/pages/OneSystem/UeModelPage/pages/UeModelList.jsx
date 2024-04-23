import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'
import { useGetUEs, usePostDeleteUEs } from '#/hooks/queries/system'

import SearchFilter from '../Filter'
import { columns } from './grid-columns'
import { MuiSubButton } from '#/components/common/button/MuiButton'
import MuiDialog from '#/components/common/popup/MuiDialog'

const UeModelList = () => {
    const navigate = useNavigate()
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const [isSearchClick, setIsSearchClick] = useState(true)
    const [isQueryState, setIsQueryState] = useState(true)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [queryParams, setQueryParams] = useState({
        page: 1,
        limit: parseInt(import.meta.env.VITE_LIST_PAGE_LIMIT), // 1회 요청에 받을수 있는 데이터 수
    })
    const { data: apiResult, refetch } = useGetUEs(queryParams, {
        enabled: setIsSearchClick && isQueryState,
    })
    const [deleteUEs, setDeleteUEs] = useState({ modelCodeList: [] })
    const [deleteResult, setDeleteResult] = useState(false)
    const { mutate: deleteMutate, isPending } = usePostDeleteUEs()

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        //setIsSearchClick((prev) => !prev)
        setIsQueryState(true)
        setQueryParams({ ...queryParams, ...values, page: 1 })
    }

    // row 클릭한 경우 상세 페이지 노출
    const handleSelectRow = ({ row }) => {
        console.log('Row Clicked : ', row)
        // if (row.modelCode)
        navigate('/system/ue/edit', { state: { row: row } })
    }

    const handleRowSelectionChange = (selectionModel) => {
        const deleteRows = fetchData.lists.filter(item => selectionModel.includes(item.id))
        console.log('selectionModel : ', selectionModel, deleteRows)
        setDeleteUEs({ modelCodeList: [...deleteRows.map(item => item.modelCode)] })
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
        deleteUEs.modelCodeList.length > 0 && console.log('deleteUEs : ', deleteUEs)
        setOpenDeleteDialog(false)
        deleteMutate(
            { ...deleteUEs },
            {
                onSuccess: ({ data }) => {
                    console.log('Delete Response : ', data)
                    data?.code === '0000' && setDeleteResult(true)
                    setFetchData({ count: 0, lists: [] })
                    refetch({ ...queryParams, queryKey: 'newDataKey' })
                    // handleSearch({ ueName: '', ueCode: '' })
                },
            },
        )
    }

    useEffect(() => {
        if (apiResult) {
            console.log('apiResult : ', apiResult)
            if (apiResult?.code === '0000') {
                const { totalCount, lists } = apiResult?.data
                const newArr = new Set([...fetchData.lists, ...lists])
                console.log('lists : ', lists)
                console.log('fetchData : ', fetchData.lists)
                console.log('newArr : ', newArr)
                setFetchData({ count: totalCount, lists: [...newArr] })
                setIsQueryState(false)
                //setFetchData({ count: totalCount, lists: [...fetchData.lists, ...lists] })
            }
        }
    }, [apiResult, isSearchClick, deleteResult])

    //console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`단말 모델 관리`} />
            <SearchFilter onSearch={handleSearch} />
            {fetchData?.lists && (
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
                                // disabled={true}
                                disabled={!deleteUEs.modelCodeList.length ? true : false || isPending}
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
                        onRowSelectionChange={handleRowSelectionChange}
                        pageInit={queryParams.page === 1 ? true : false}
                    />
                </Box>
            )}
            {openDeleteDialog && (
                <MuiDialog
                    isOpen={openDeleteDialog}
                    content={`삭제하면 복구가 불가능합니다. 삭제 하시겠습니까?`}
                    onCancel={() => setOpenDeleteDialog(false)}
                    onConfirm={handleDeleteRows}
                />
            )}
        </Box>
    )
}

export default UeModelList
