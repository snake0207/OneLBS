import { useFormik } from 'formik'
import { Box, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import TextInput from '#/components/common/input/TextInput'
import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            phoneNo: '',
        },
        onSubmit: (values) => {
            if (onSearch) onSearch(values)
        },
    })

    return (
        <Box sx={style.searchBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`전화번호`}</TableCell>
                        <TableCell sx={{ width: '30%' }}>
                            <TextInput name="phoneNo" formik={formik} />
                        </TableCell>
                        <TableCell align="right">
                            <MuiSubButton
                                name="search"
                                title="검색"
                                onClick={formik.handleSubmit}
                            />
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </Box>
    )
}

export default SearchFilter
