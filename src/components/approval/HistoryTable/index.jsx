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
import { useNavigate } from 'react-router-dom'
import t from '#/common/libs/trans.js'

const HistoryTable = ({ dummyData, headers }) => {
    const navigator = useNavigate()

    return (
        <>
            <Typography>
                {t('total', 'approval')} {dummyData?.length || 0}
                {t('case', 'approval')}
            </Typography>
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
                                            navigator(
                                                `/components/approval/request/detail/${data.id}`,
                                            )
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
                                        <TableCell>{data.approval_date}</TableCell>
                                        <TableCell>{data.status}</TableCell>
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
