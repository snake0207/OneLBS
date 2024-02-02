import { Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import t from '#/common/libs/trans'
import Row from './Row'

function IpTabel({ rows }) {
    return (
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{t('no', 'users')}</TableCell>
                        <TableCell>{t('email', 'users')}</TableCell>
                        <TableCell>{t('name', 'users')}</TableCell>
                        <TableCell>{t('team_name', 'users')}</TableCell>
                        <TableCell>{t('permission', 'users')}</TableCell>
                        <TableCell>{t('ip', 'users')}</TableCell>
                        <TableCell>{t('description', 'users')}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <Row key={row?.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </Box>
    )
}

export default IpTabel
