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
    const timeTypeList = () => [
        { key: 0, value: 0, label: `분별` },
        { key: 1, value: 1, label: `시간별` },
        { key: 2, value: 2, label: `일별` },
    ]
    const formik = useFormik({
        initialValues: {
            start_date: '',
            end_date: '',
            start_time: '00',
            end_time: '00',
            timeType: 0,
            serviceCode: '',
            appid: '',
            ueModel: '',
            opType: '',
            posInit: '',
            plane: '',
            posMethod: '',
            respCode: '',
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
                        <TableCell sx={style.cellTitle}>{`시간 구분`}</TableCell>
                        <TableCell sx={style.cellInput}>
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
                        <TableCell sx={style.cellTitle}>{`서비스 코드`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="serviceCode" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`App ID`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="appid" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`단말 모델`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="ueModel" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`OP Type`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="opType" formik={formik} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`Pos INIT`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="posInit" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`Plane`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="plane" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`측위 방식`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="posMethod" formik={formik} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`응답 코드`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="respCode" formik={formik} />
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
