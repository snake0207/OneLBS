import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import { unionGetCrowdTypeList } from '#/common/libs/service'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            startDate: '',
            endDate: '',
            crowdType: 'T',
        },
        onSubmit: (values) => {
            const startDate = `${values.startDate.split('-').join('')}`
            const endDate = `${values.endDate.split('-').join('')}`
            if (onSearch)
                onSearch({
                    startDate,
                    endDate,
                    crowdType: values.crowdType,
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
                                name={'crowdType'}
                                formik={formik}
                                items={unionGetCrowdTypeList()}
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
                                <DatePickerInput name={'startDate'} formik={formik} />
                                <Typography>~</Typography>
                                <DatePickerInput name={'endDate'} formik={formik} />
                            </Stack>
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
