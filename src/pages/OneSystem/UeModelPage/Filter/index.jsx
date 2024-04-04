import { useFormik } from 'formik'
import { Box, Table, TableCell, TableHead, TableRow } from '@mui/material'

import TextInput from '#/components/common/input/TextInput'
import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            ueName: '',
            ueCode: '',
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
                        <TableCell sx={style.cellTitle}>{`모델명`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="ueName" formik={formik} sx={{ width: '100%' }} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`모델 코드`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="ueCode" formik={formik} sx={{ width: '100%' }} />
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
