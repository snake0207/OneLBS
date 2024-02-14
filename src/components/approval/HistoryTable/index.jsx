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
import ActionButtons from '#/components/approval/Detail/ActionButtons/index.jsx'

const HistoryTable = ({ type, dummyData, onClickButtonFunction, onClickRowFunction }) => {
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 'max-content' }}>
                    <TableHead>
                        <TableRow>
                            {headers.map((header, index) =>
                                header === null ? (
                                    ''
                                ) : headers.length === index + 1 ? (
                                    // 상태컬럼 colspan 설정
                                    <TableCell colSpan={2} key={index}>
                                        {header}
                                    </TableCell>
                                ) : (
                                    <TableCell key={index}>{header}</TableCell>
                                ),
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dummyData?.length ? (
                            dummyData.map((data, index) => {
                                return (
                                    <TableRow
                                        key={data.id}
                                        id={data.id}
                                        hover
                                        onClick={(e) => onClickRowFunction(e.target, data.id)}
                                    >
                                        <TableCell>{dummyData.length - index}</TableCell>
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
                                        <TableCell>
                                            <ActionButtons
                                                type={type}
                                                status={data.status}
                                                clickAction={onClickButtonFunction}
                                                id={data.id}
                                            />
                                        </TableCell>
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
