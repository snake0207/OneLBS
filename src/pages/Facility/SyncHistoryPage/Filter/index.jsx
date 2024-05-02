import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'
import { unionBtsTypeList } from '#/common/libs/facility'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            startDate: '',
            endDate: '',
            start_time: String(new Date().getHours()),
            end_time: String(new Date().getHours()),
            type: 'T',
        },
        onSubmit: (values) => {
            const startDate = `${values.startDate.split('-').join('')}${values.start_time}`
            const endDate = `${values.endDate.split('-').join('')}${values.end_time}`
            if (onSearch)
                onSearch({
                    startDate,
                    endDate,
                    type: values.type,
                })
        },
    })

    return (
        <Box sx={style.searchBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{}} colSpan={3}>{`조회기간`}</TableCell>
                        <TableCell sx={{}} colSpan={3}>{`구분`}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ width: '64%' }} colSpan={3}>
                            <Stack
                                direction={'row'}
                                spacing={0.1}
                                alignItems={'center'}
                                width="100%"
                            >
                                <DatePickerInput name={'startDate'} formik={formik} />
                                <TimePickerInput name={'start_time'} formik={formik} />
                                <Typography>~</Typography>
                                <DatePickerInput name={'endDate'} formik={formik} />
                                <TimePickerInput name={'end_time'} formik={formik} />
                            </Stack>
                        </TableCell>
                        <TableCell sx={{ width: '20%' }} colSpan={2}>
                            <Select
                                name={'type'}
                                formik={formik}
                                items={unionBtsTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell align="right">
                            <MuiSubButton
                                disabled={!formik.values.startDate || !formik.values.endDate}
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
