import { useEffect, useState } from 'react'
import UserTable from '#/components/users/list/UserTable'

import { getPopupMessage } from '#/common/libs/permission'
import { usePopupActions } from '#/store/usePopupStore'
import { Box, Button, Typography } from '@mui/material'

import TitleBar from '#/components/common/menu/TitleBar'

import SearchFilter from '../Filter'
import { useGetServiceList } from '#/hooks/queries/system'
import ServiceDetail from './Detail'
import ServiceTable from './List'
import CustomDataGrid from '#/components/common/table/datagrid'
import { columns } from '../columns'
import { useNavigate } from 'react-router-dom'

const ServiceListPage = () => {
    const navigate = useNavigate()
    const actions = usePopupActions()
    const [openDetail, setOpenDetail] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    const [isFetchState, setIsFetchState] = useState(true)
    const [fetchData, setFetchData] = useState({ count: 0, lists: [] })
    const [queryParams, setQueryParams] = useState({
        serviceName: '',
        serviceCode: '',
        cpName: '',
        serviceType: 9,
        page: 1,
        limit: 50, // 1회 요청에 받을수 있는 데이터 수
    })
    const { data } = useGetServiceList(queryParams, {
        enabled: isFetchState,
    })

    useEffect(() => {
        if (data) {
            const { count, lists } = data
            const nLists = lists.map((item) => ({ ...item, id: item.id + queryParams.page * 100 }))
            setFetchData({ count: count, lists: [...fetchData.lists, ...nLists] })
        }
    }, [data])

    // 검색 버튼 누른 경우
    const handleSearch = (values) => {
        console.log('handleSearch >> ', values)
        setIsFetchState(true)
        setQueryParams({ ...queryParams, ...values, page: 1 })
    }

    const handleResetPassword = (row) => {
        console.log('handleResetPassword', row)

        actions.showPopup(
            'confirm',
            getPopupMessage(8),
            handleConfirmResestPassword,
            handleCancelResestPassword,
        )
    }

    const handleConfirmResestPassword = () => {
        console.log('handleConfirmResestPassword')

        actions.showPopup('alert', getPopupMessage(9))
    }

    const handleCancelResestPassword = () => {
        // refresh table
    }

    const handleWithdraw = (row) => {
        console.log('handleWithdraw', row)

        actions.showPopup(
            'confirm',
            getPopupMessage(10),
            handleConfirmWithdraw,
            handleCancelWithdraw,
        )
    }

    const handleConfirmWithdraw = () => {
        console.log('handleConfirmWithdraw')

        actions.showPopup('alert', getPopupMessage(11))
    }

    const handleCancelWithdraw = () => {
        console.log('handleCancelWithdraw')
        // refresh table
    }

    const handleChangeServiceType = (row, value) => {
        console.log('handleChangePermission', row, value)

        actions.showPopup(
            'confirm',
            getPopupMessage(0),
            handleConfirmPermission,
            handleCancelPermission,
        )
    }

    const handleConfirmPermission = () => {
        console.log('handleConfirmPermission')

        actions.showPopup('alert', getPopupMessage(1))
    }

    const handleCancelPermission = () => {
        // refresh table
    }

    const handleChangeStatus = (row, value) => {
        console.log('handleChangeStatus', row, value)

        actions.showPopup('confirm', getPopupMessage(2), handleConfirmStatus, handleCancelStatus)
    }

    const handleConfirmStatus = () => {
        console.log('handleConfirmStatus')

        actions.showPopup('alert', getPopupMessage(3))
    }

    const handleCancelStatus = () => {
        // refresh table
    }

    const handleChangeRemark = (row, value) => {
        console.log('handleChangeRemark', row, value)

        actions.showPopup('confirm', getPopupMessage(6), handleConfirmRemark, handleCancelRemark)
    }

    const handleConfirmRemark = () => {
        console.log('handleConfirmRemark')

        actions.showPopup('alert', getPopupMessage(7))
    }

    const handleCancelRemark = () => {
        // refresh table
    }

    // row 클릭한 경우 상세 페이지 노출
    const handleSelectRow = ({ row }) => {
        setSelectedRow(row)
        setOpenDetail(true)
    }

    // 상세 페이지에서 Dialog 창을 닫은 경우 호출
    const handleClose = () => {
        setOpenDetail(false)
    }

    // 리스트 하단의 페이지 이동 버튼 click시 동작
    const handleOnPageChange = (currPage) => {
        const pageSize = parseInt(import.meta.env.VITE_LIST_PAGE_SIZE)
        const rowCount = (currPage + 1) * pageSize

        console.log(pageSize, rowCount)
        if (currPage > 0 && rowCount >= fetchData.lists.length) {
            console.log('Refetch call...')
            setQueryParams({ ...queryParams, page: queryParams.page + 1 })
        }
    }

    const handleCreateService = () => {
        navigate('/system/service/create')
    }

    console.log('fetchData : ', fetchData)

    return (
        <Box>
            <TitleBar title={`서비스 관리`} />
            <SearchFilter onSearch={handleSearch} />
            {/* <ServiceTable
                rows={data?.data}
                onChangePage={handleChangePage}
                onChangePermission={handleChangePermission}
                onChangeStatus={handleChangeStatus}
                onChangeRemark={handleChangeRemark}
                onResetPassword={handleResetPassword}
                onWithdraw={handleWithdraw}
                onSelectRow={handleSelectRow}
            /> */}
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
                        <Button variant="outlined" color="info" onClick={handleCreateService}>
                            등록
                        </Button>
                    </Box>
                    <CustomDataGrid
                        rows={fetchData?.lists}
                        rowCount={fetchData?.count}
                        columns={columns}
                        sort={{ field: 'id', orderby: 'desc' }}
                        onPageChange={handleOnPageChange}
                        onRowClick={handleSelectRow}
                        // activeTools={['export']} // column, filter, export
                        // 검색어 입력, 날짜를 변경한 경우만 page:1로 설정됨.
                        // 이 정보를 기준으로 하단의 page를 1페이지로 이동시킬 수 있음
                        pageInit={queryParams.page === 1 ? true : false}
                    />
                </Box>
            )}
            <Button onClick={handleWithdraw}>handleWithdraw</Button>
            <Button onClick={handleConfirmWithdraw}>handleConfirmWithdraw</Button>

            <ServiceDetail
                row={selectedRow}
                open={openDetail}
                onClose={handleClose}
                onApprove={handleChangeStatus} // 승인
                onDeactivate={handleChangeStatus} // 비활성화
                onResetPassword={handleResetPassword}
                onChangeServiceType={handleChangeServiceType}
            />
        </Box>
    )
}

export default ServiceListPage
