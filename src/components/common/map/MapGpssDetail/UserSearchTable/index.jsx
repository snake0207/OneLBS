import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { GPSS_TABLE_TYPE } from '#/contents/constant.js'
import t from '#/common/libs/trans.js'
import style from './style.module'

const UserSearchTable = ({ data, ...props }) => {
    const tableHeader = [t('id', 'common'), t('name', 'common'), t('company', 'common')]
    const {
        tableType,
        selectedApprover,
        setSelectedApprover,
        selectedReviewer,
        setSelectedReviewer,
    } = props
    const handleClickSetClickedRow = (userSeq) => {
        if (tableType === GPSS_TABLE_TYPE.reviewer) {
            const selected = selectedReviewer
            if (!selected) {
                setSelectedReviewer(userSeq)
                return
            }
            if (selected === userSeq) setSelectedReviewer(null)
            else setSelectedReviewer(userSeq)
        }
        if (tableType === GPSS_TABLE_TYPE.approver) {
            const selected = selectedApprover
            if (!selected) {
                setSelectedApprover(userSeq)
                return
            }
            if (selected === userSeq) selectedApprover(null)
            else setSelectedApprover(userSeq)
        }
    }

    const setIsSelected = (userSeq) => {
        if (tableType === GPSS_TABLE_TYPE.reviewer) return selectedReviewer === userSeq
        if (tableType === GPSS_TABLE_TYPE.approver) return selectedApprover === userSeq
    }

    return (
        <TableContainer>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        {tableHeader.map((header, idx) => (
                            <TableCell align={'center'} key={idx} sx={{ padding: '8px' }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((data, idx) => (
                        <TableRow
                            key={idx}
                            hover
                            onClick={() => handleClickSetClickedRow(data.userSeq)}
                            selected={setIsSelected(data.userSeq)}
                        >
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.company}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserSearchTable
