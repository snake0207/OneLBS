import { useFormik } from 'formik'
import {
    Box,
    FormGroup,
    Stack,
    Table,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'
import CheckBox from '#/components/common/input/CheckBox'
import TextInput from '#/components/common/input/TextInput'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            start_date: '',
            end_date: '',
            start_time: String(new Date().getHours()),
            end_time: String(new Date().getHours()),
            serviceCode: '',
            opType: '',
            targetNo: '',
        },
        onSubmit: (values) => {
            const start_date = `${values.start_date.split('-').join('')}${values.start_time}`
            const end_date = `${values.end_date.split('-').join('')}${values.end_time}`
            if (onSearch) onSearch({ ...values, start_date, end_date })
        },
    })

    return (
        <Box sx={style.searchBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`조회기간`}</TableCell>
                        <TableCell sx={style.cellInput} colSpan={5}>
                            <Stack
                                direction={'row'}
                                spacing={0.1}
                                alignItems={'center'}
                                width="100%"
                            >
                                <DatePickerInput name={'start_date'} formik={formik} />
                                <TimePickerInput name={'start_time'} formik={formik} />
                                <Typography>~</Typography>
                                <DatePickerInput name={'end_date'} formik={formik} />
                                <TimePickerInput name={'end_time'} formik={formik} />
                            </Stack>
                        </TableCell>
                    </TableRow>
                    {/* Group by */}
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`서비스`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="serviceCode" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`OP Type`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="opType" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`대상자`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="targetNo" formik={formik} />
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
