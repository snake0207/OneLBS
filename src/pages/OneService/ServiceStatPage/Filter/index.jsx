import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'

function SearchFilter({ onSearch }) {
    const timeTypeList = () => [
        { key: 0, value: 0, label: `분별` },
        { key: 1, value: 1, label: `시간별` },
        { key: 2, value: 2, label: `일별` },
    ]
    const formik = useFormik({
        initialValues: {
            start_date: '',
            end_date: '',
            timeType: 9,
        },
        onSubmit: (values) => {
            const start_date = `${values.start_date.split('-').join('')}${values.start_time}`
            const end_date = `${values.end_date.split('-').join('')}${values.end_time}`
            if (onSearch) onSearch({ start_date, end_date, timeType: values.timeType })
        },
    })

    return (
        <Box sx={style.searchBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: '10%' }}>{`시간 구분`}</TableCell>
                        <TableCell sx={{ width: '12%' }}>
                            <Select
                                name={'timeType'}
                                formik={formik}
                                items={timeTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell sx={{ width: '10%' }}>{`조회기간`}</TableCell>
                        <TableCell sx={{ width: '68%' }}>
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
