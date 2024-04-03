import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import TextInput from '#/components/common/input/TextInput'
import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'

function SearchFilter({ onSearch }) {
    const eventTypeList = () => [
        { key: 9, value: 9, label: `전체` },
        { key: 0, value: 0, label: `로그인` },
        { key: 1, value: 1, label: `권한변경` },
        { key: 2, value: 2, label: `메뉴접근` },
    ]
    const formik = useFormik({
        initialValues: {
            start_date: '',
            end_date: '',
            start_time: '',
            end_time: '',
            eventType: 9,
            userId: '',
        },
        onSubmit: (values) => {
            const start_date = `${values.start_date.split('-').join('')}${values.start_time}`
            const end_date = `${values.end_date.split('-').join('')}${values.end_time}`
            if (onSearch)
                onSearch({
                    start_date,
                    end_date,
                    eventType: values.eventType,
                    userId: values.userId,
                })
        },
    })

    return (
        <Box sx={style.searchBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={style.cellTitle} rowSpan={2}>{`조회기간`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <Stack
                                direction={'row'}
                                spacing={0.3}
                                alignItems={'center'}
                                width="100%"
                            >
                                <DatePickerInput name={'start_date'} formik={formik} />
                                <TimePickerInput name={'start_time'} formik={formik} />
                            </Stack>
                        </TableCell>
                        <TableCell sx={{ width: '5%' }} />
                        <TableCell sx={style.cellTitle}>{`구분`}</TableCell>
                        <TableCell sx={{ width: '20%' }}>
                            <Select
                                name={'eventType'}
                                formik={formik}
                                items={eventTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={style.cellInput}>
                            <Stack
                                direction={'row'}
                                spacing={0.3}
                                alignItems={'center'}
                                width="100%"
                            >
                                <DatePickerInput name={'end_date'} formik={formik} />
                                <TimePickerInput name={'end_time'} formik={formik} />
                            </Stack>
                        </TableCell>
                        <TableCell sx={{ width: '5%' }} />
                        <TableCell sx={style.cellTitle}>{`아이디`}</TableCell>
                        <TableCell sx={{ width: '20%' }}>
                            <TextInput name="userId" formik={formik} />
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
