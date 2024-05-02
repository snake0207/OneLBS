import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import TextInput from '#/components/common/input/TextInput'
import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'

function SearchFilter({ onSearch }) {
    const reqTypeList = () => [
        { key: 'T', value: 'T', label: `전체` },
        { key: 'L', value: 'L', label: `로그인` },
        { key: 'A', value: 'A', label: `권한변경` },
        { key: 'M', value: 'M', label: `메뉴접근` },
    ]
    const formik = useFormik({
        initialValues: {
            startDate: '',
            endDate: '',
            start_time: String(new Date().getHours()),
            end_time: String(new Date().getHours()),
            reqType: 'L',
            userId: '',
        },
        onSubmit: (values) => {
            const startDate = `${values.startDate.split('-').join('')}${values.start_time}`
            const endDate = `${values.endDate.split('-').join('')}${values.end_time}`
            if (onSearch)
                onSearch({
                    startDate,
                    endDate,
                    reqType: values.reqType,
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
                                <DatePickerInput name={'startDate'} formik={formik} />
                                <TimePickerInput name={'start_time'} formik={formik} />
                            </Stack>
                        </TableCell>
                        <TableCell sx={{ width: '5%' }} />
                        <TableCell sx={style.cellTitle}>{`구분`}</TableCell>
                        <TableCell sx={{ width: '20%' }}>
                            <Select
                                name={'reqType'}
                                formik={formik}
                                items={reqTypeList()}
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
                                <DatePickerInput name={'endDate'} formik={formik} />
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
