import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'

function SearchFilter({ onSearch }) {
    const procTypeList = () => [
        { key: 9, value: 9, label: `전체` },
        { key: 0, value: 0, label: `일간` },
        { key: 1, value: 1, label: `종합` },
    ]
    const formik = useFormik({
        initialValues: {
            start_date: '',
            end_date: '',
            procType: 9,
        },
        onSubmit: (values) => {
            const start_date = `${values.start_date.split('-').join('')}`
            const end_date = `${values.end_date.split('-').join('')}`
            if (onSearch)
                onSearch({
                    start_date,
                    end_date,
                    procType: values.procType,
                })
        },
    })

    return (
        <Box sx={style.searchBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`처리 구분`}</TableCell>
                        <TableCell sx={{ width: '15%' }}>
                            <Select
                                name={'procType'}
                                formik={formik}
                                items={procTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell />
                        <TableCell sx={style.cellTitle}>{`조회기간`}</TableCell>
                        <TableCell sx={{ width: '46%' }}>
                            <Stack
                                direction={'row'}
                                spacing={0.3}
                                alignItems={'center'}
                                width="100%"
                            >
                                <DatePickerInput name={'start_date'} formik={formik} />
                                <Typography>~</Typography>
                                <DatePickerInput name={'end_date'} formik={formik} />
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
