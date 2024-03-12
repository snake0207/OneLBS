import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import t from '#/common/libs/trans.js'

import style from './style.module'

const HistoryTable = ({ type, dataList, onClickRowFunction, currentPage }) => {
    const headers = [
        'No.',
        t('name', 'approval'),
        t('country', 'approval'),
        type === 'requester' ? null : t('requester', 'approval'), // 권한별 컬럼노출여부
        type === 'reviewer' ? null : t('reviewer', 'approval'),
        type === 'approver' ? null : t('approver', 'approval'),
        t('request_date', 'approval'),
        t('review_date', 'approval'),
        t('approval_date', 'approval'),
        t('state', 'approval'),
    ]

    return (
        <>
            <TableContainer component={Paper} sx={style.contentBox}>
                <Table sx={style.tableBox}>
                    <TableHead>
                        <TableRow>
                            {headers.map((header, index) =>
                                header === null ? '' : <TableCell key={index}>{header}</TableCell>,
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataList?.length ? (
                            dataList.map((data, index) => {
                                return (
                                    <TableRow
                                        key={data.id}
                                        id={data.id}
                                        hover
                                        onClick={() => onClickRowFunction(data.id)}
                                    >
                                        <TableCell>{(currentPage - 1) * 10 + index + 1}</TableCell>
                                        <TableCell>{data.name}</TableCell>
                                        <TableCell>{data.region}</TableCell>
                                        {type === 'requester' ? null : (
                                            <TableCell>{data.requester}</TableCell>
                                        )}
                                        {type === 'reviewer' ? null : (
                                            <TableCell>{data.reviewer}</TableCell>
                                        )}
                                        {type === 'approver' ? null : (
                                            <TableCell>{data.approver}</TableCell>
                                        )}
                                        <TableCell>{data.request_date}</TableCell>
                                        <TableCell>{data.review_date}</TableCell>
                                        <TableCell>{data.approval_date}</TableCell>
                                        <TableCell>{data.status}</TableCell>
                                    </TableRow>
                                )
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={headers.length} align={'center'}>
                                    NO DATA
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default HistoryTable
