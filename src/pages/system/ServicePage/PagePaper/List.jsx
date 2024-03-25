import { Box, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import style from './style-list.module'

import CommonPagination from '#/components/common/pagination/CommonPagination'

const ServiceTable = ({
    rows,
    onChangePage,
    onChangePermission,
    onChangeStatus,
    onChangeRemark,
    onResetPassword,
    onWithdraw,
    onSelectRow,
}) => {
    const handleChangePermission = (row, value) => {
        // console.log('handleChangePermission', row, value)

        if (onChangePermission) onChangePermission(row, value)
    }

    const handleChangeStatus = (row, value) => {
        // console.log('handleChangeStatus', row, value)

        if (onChangeStatus) onChangeStatus(row, value)
    }

    const handleChangeRemark = (row, value) => {
        // console.log('handleChangeRemark', row, value)

        if (onChangeRemark) onChangeRemark(row, value)
    }

    const handleResetPassword = (row) => {
        // console.log('handleResetPassword', row)

        if (onResetPassword) onResetPassword(row)
    }

    const handleWithdraw = (row) => {
        // console.log('handleWithdraw', row)

        if (onWithdraw) onWithdraw(row)
    }

    const handleChagePage = (page) => {
        //console.log('onChangePage', page)

        onChangePage(page)
    }

    return (
        <Box sx={style.contentBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell>{`ID`}</TableCell>
                        <TableCell>{`서비스명`}</TableCell>
                        <TableCell>{`서비스코드`}</TableCell>
                        <TableCell>{`사업자명`}</TableCell>
                        <TableCell>{`서비스제공자`}</TableCell>
                        <TableCell>{`등록일`}</TableCell>
                        <TableCell>{`승인일`}</TableCell>
                        <TableCell>{`상태`}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <TableRow key={row?.id} onClick={() => onSelectRow(row)}>
                            <TableCell>{row?.id}</TableCell>
                            <TableCell>{row?.serviceName}</TableCell>
                            <TableCell>{row?.serviceCode}</TableCell>
                            <TableCell>{row?.cpName}</TableCell>
                            <TableCell>{row?.serviceProvider}</TableCell>
                            <TableCell>{row?.register_date}</TableCell>
                            <TableCell>{row?.approve_date}</TableCell>
                            <TableCell>{row?.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <CommonPagination dataLength={rows?.length} onChangePageFunction={handleChagePage} />
        </Box>
    )
}

export default ServiceTable
