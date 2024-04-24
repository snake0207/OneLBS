import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import TitleBar from '#/components/common/menu/TitleBar'
import CustomDataGrid from '#/components/common/table/datagrid'
import { useGetUEs, usePostDeleteUEs } from '#/hooks/queries/system'

import SearchFilter from '../Filter'
import { columns } from './grid-columns'
import { MuiSubButton } from '#/components/common/button/MuiButton'
import MuiDialog from '#/components/common/popup/MuiDialog'
import MuiAlert from '#/components/common/popup/MuiAlert'

const UeModelList = () => {
    const navigate = useNavigate()
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const [isQueryState, setIsQueryState] = useState(true)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [queryParams, setQueryParams] = useState({
        page: 1,
        limit: parseInt(import.meta.env.VITE_LIST_PAGE_LIMIT), // 1회 요청에 받을수 있는 데이터 수
        cache: Math.random(),
    })
    const { data: apiResult, refetch } = useGetUEs(queryParams, {
        enabled: isQueryState,
    })
    const [deleteUEs, setDeleteUEs] = useState({ modelCode: [] })
    const { mutate: deleteMutate, isPending } = usePostDeleteUEs()
    const [apiSuccess, setApiSuccess] = useState('')

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        setFetchData({ count: 0, lists: [] })
        setQueryParams({ ...queryParams, ...values, page: 1 })
        setIsQueryState(true)
    }

    // row 클릭한 경우 상세 페이지 노출
    const handleSelectRow = ({ row }) => {
        navigate('/system/ue/edit', { state: { row: row } })
    }

    const handleRowSelectionChange = (selectionModel) => {
        const deleteRows = fetchData.lists.filter((item) => selectionModel.includes(item.id))
        setDeleteUEs({ modelCode: [...deleteRows.map((item) => item.modelCode)] })
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

    const handleDeleteRows = () => {
        deleteUEs.modelCode.length > 0 && console.log('deleteUEs : ', deleteUEs)
        setOpenDeleteDialog(false)
        deleteMutate(
            { ...deleteUEs },
            {
                onSuccess: ({ data }) => {
                    console.log('Delete Response : ', data)
                    setApiSuccess(`DELETE API RESULT : ${data?.data}`)
                    if (data?.code === '0000') {
                        setFetchData({ count: 0, lists: [] })
                        setIsQueryState(true)
                        refetch({ ...queryParams, queryKey: 'newDataKey' })
                    }
                },
            },
        )
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

    //console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`단말 모델 관리`} />
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
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography
                        sx={{ fontSize: '14px' }}
                    >{`Total Count: ${fetchData.count}`}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                        <MuiSubButton
                            // disabled={true}
                            disabled={!deleteUEs.modelCode.length ? true : false || isPending}
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
            {openDeleteDialog && (
                <MuiDialog
                    isOpen={openDeleteDialog}
                    content={`삭제하면 복구가 불가능합니다. 삭제 하시겠습니까?`}
                    onCancel={() => setOpenDeleteDialog(false)}
                    onConfirm={handleDeleteRows}
                />
            )}
            {apiSuccess && (
                <MuiAlert
                    msg={apiSuccess}
                    autoHideDuration={3000}
                    callback={() => {
                        setApiSuccess('')
                    }}
                />
            )}
        </Box>
    )
}

export default UeModelList
