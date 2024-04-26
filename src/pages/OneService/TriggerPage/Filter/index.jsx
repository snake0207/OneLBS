import { useFormik } from 'formik'
import { Box, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import TextInput from '#/components/common/input/TextInput'
import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'

import * as yup from 'yup'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            targetMdn: '',
        },
        validationSchema: yup.object({
            targetMdn: yup.string().matches(/^\d{10}$|^\d{11}$/, `10~11자리 숫자를 입력해 주세요.`),
        }),
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
                        <TableCell style={{ width: '20%' }}>
                            <TextInput name="targetMdn" formik={formik} />
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
