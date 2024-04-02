import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import TextInput from '#/components/common/input/TextInput'
import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'

function SearchFilter({ onSearch }) {
    const getProcType = () => [
        { key: 0, value: 0, label: `3개월 만료` },
        { key: 1, value: 1, label: `6개월 만료` },
    ]
    const formik = useFormik({
        initialValues: {
            start_date: '',
            end_date: '',
            start_time: '',
            end_time: '',
            procType: 0,
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
                        <TableCell sx={{}} colSpan={3}>{`조회기간`}</TableCell>
                        <TableCell sx={{}} colSpan={3}>{`처리유형`}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ width: '64%' }} colSpan={3}>
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
                        <TableCell sx={{ width: '20%' }} colSpan={2}>
                            <Select
                                name={'procType'}
                                formik={formik}
                                items={getProcType()}
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
                                name="search"
                                title="검색"
                                onClick={formik.handleSubmit}
                            />
                        </TableCell>
                    </TableRow>
                    {/* <TableRow>
                        <TableCell sx={{ width: '50%' }} component="td">
                            <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                                <DatePickerInput name={'start_date'} formik={formik} />
                                <TimePickerInput name={'stime'} formik={formik} />
                            </Stack>
                            <Stack textAlign="center">
                                <Typography>~</Typography>
                            </Stack>
                            <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                                <DatePickerInput name={'end_date'} formik={formik} />
                                <TimePickerInput name={'etime'} formik={formik} />
                            </Stack>
                        </TableCell>
                        <TableCell sx={{ width: '12%' }}>{`처리유형`}</TableCell>
                        <TableCell sx={{ width: '20%' }} component="td">
                            <Select
                                name={'procType'}
                                formik={formik}
                                items={getProcType()}
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
                                name="search"
                                title="검색"
                                onClick={formik.handleSubmit}
                            />
                        </TableCell> */}
                </TableHead>
            </Table>
        </Box>
    )
}

export default SearchFilter
