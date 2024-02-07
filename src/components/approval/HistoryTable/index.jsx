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
import { useRef } from 'react'

const HistoryTable = ({ type, dummyData }) => {
    const navigator = useNavigate()
    const url = window.location.pathname
    const headers = [
        'No.',
        t('name', 'approval'),
        t('country', 'approval'),
        type === 'requester' ? null : t('requester', 'approval'),
        type === 'reviewer' ? null : t('reviewer', 'approval'),
        type === 'approver' ? null : t('approver', 'approval'),
        t('request_date', 'approval'),
        t('review_date', 'approval'),
        t('approval_date', 'approval'),
        t('state', 'approval'),
    ]

    const totalContentCount = useRef({
        temporary: 0,
        request: 0,
        reviewed: 0,
        approved: 0,
        rejected: 0,
    })

    const renderCountText = (text, isLast) => {
        return (
            <Typography variant={'body2'} component={'span'}>
                {t(`status.${text}`, 'approval')} {totalContentCount.current[text]}
                {t('case', 'approval')}
                {isLast ? '' : ', '}
            </Typography>
        )
    }

    return (
        <>
            <Typography variant={'body2'} component={'span'}>
                {t('total', 'approval')} {dummyData?.length || 0}
                {t('case', 'approval')}
            </Typography>
            <Typography variant={'body2'} component={'span'}>
                {'( '}
                {!(type === 'reviewer' || type === 'approver') &&
                    renderCountText('temporary', false)}
                {type !== 'approver' && renderCountText('request', false)}
                {renderCountText('reviewed', false)}
                {renderCountText('approved', false)}
                {renderCountText('rejected', true)}
                {' )'}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 'max-content' }}>
                    <TableHead>
                        <TableRow>
                            {headers.map((header, index) =>
                                header === null ? '' : <TableCell key={index}>{header}</TableCell>,
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dummyData?.length ? (
                            dummyData.map((data, index) => {
                                ++totalContentCount.current[data.status]
                                return (
                                    <TableRow
                                        key={data.id}
                                        id={data.id}
                                        hover
                                        onClick={() => navigator(`${url}/detail/${data.id}`)}
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
