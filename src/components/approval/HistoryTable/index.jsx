import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import { useModalActions } from '#/store/useModalStore.js'
import { MODAL_TITLE } from '#/contents/constant.js'
import { useNavigate } from 'react-router-dom'

const HistoryTable = ({ dummyData, headers }) => {
    const navigator = useNavigate()

    return (
        <>
            <Typography>총 {dummyData?.length || 0}건</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 'max-content' }}>
                    <TableHead>
                        <TableRow>
                            {headers.map((header, index) => (
                                <TableCell key={index}>{header}</TableCell>
                            ))}
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
                                        onClick={() =>
                                            navigator('/components/approval/detail/' + data.id)
                                        }
                                    >
                                        <TableCell>{dummyData.length - index}</TableCell>
                                        <TableCell>{data.name}</TableCell>
                                        <TableCell>{data.region}</TableCell>
                                        <TableCell>{data.requester}</TableCell>
                                        <TableCell>{data.reviewer}</TableCell>
                                        <TableCell>{data.approver}</TableCell>
                                        <TableCell>{data.request_date}</TableCell>
                                        <TableCell>{data.review_date}</TableCell>
                                        <TableCell>{data.reject_date}</TableCell>
                                        <TableCell>{data.approval_date}</TableCell>
                                        <TableCell>{data.status}</TableCell>
                                        <TableCell>{data.request_reason}</TableCell>
                                        <TableCell>{data.reject_reason}</TableCell>
                                        <TableCell>{data.history}</TableCell>
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
