import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'
import CheckBox from '#/components/common/input/CheckBox'
import TextInput from '#/components/common/input/TextInput'

function SearchFilter({ onSearch }) {
    const btsTypeList = () => [
        { key: 9, value: 9, label: `전체` },
        { key: 0, value: 0, label: `3G 기지국` },
        { key: 1, value: 1, label: `LTE 기지국(KT)` },
        { key: 2, value: 2, label: `LTE 공동망 기지국(SKT)` },
        { key: 3, value: 3, label: `LTE 공동망 기지국(U+)` },
        { key: 4, value: 4, label: `5G 기지국` },
        { key: 5, value: 5, label: `Wing WiFi` },
    ]
    const formik = useFormik({
        initialValues: {
            start_date: '',
            end_date: '',
            start_time: String(new Date().getTime()),
            end_time: String(new Date().getTime()),
            btsType: 0,
        },
        onSubmit: (values) => {
            const start_date = `${values.start_date.split('-').join('')}${values.start_time}`
            const end_date = `${values.end_date.split('-').join('')}${values.end_time}`
            if (onSearch)
                onSearch({
                    start_date: start_date,
                    end_date: end_date,
                    btsType: values.btsType,
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
                                <DatePickerInput name={'start_date'} formik={formik} />
                                <TimePickerInput name={'start_time'} formik={formik} />
                                <Typography>~</Typography>
                                <DatePickerInput name={'end_date'} formik={formik} />
                                <TimePickerInput name={'end_time'} formik={formik} />
                            </Stack>
                        </TableCell>
                        <TableCell sx={{ width: '20%' }} colSpan={2}>
                            <Select
                                name={'btsType'}
                                formik={formik}
                                items={btsTypeList()}
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
                </TableHead>
            </Table>
        </Box>
    )
}

export default SearchFilter
