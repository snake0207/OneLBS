import { Box, Stack, Table, TableCell, TableHead, TableRow } from '@mui/material'
import { useFormik } from 'formik'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import { getRenewalCycle } from '#/common/libs/service'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TextInput from '#/components/common/input/TextInput'
import style from './style.module'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            statTime: '',
            renewalCycle: 1,
            serviceCode: '',
        },
        onSubmit: (values) => {
            const startDate = `${values.statTime.split('-').join('')}${values.statTime}`
            if (onSearch) onSearch({ ...values, startDate })
        },
    })

    return (
        <Box sx={style.searchBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`날짜`}</TableCell>
                        <TableCell sx={style.cellInput} colSpan={5}>
                            <Stack
                                direction={'row'}
                                spacing={0.1}
                                alignItems={'center'}
                                width="70%"
                            >
                                <DatePickerInput name={'statTime'} formik={formik} />
                            </Stack>
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`갱신 주기`}</TableCell>
                        <TableCell>
                            <Select
                                name="renewalCycle"
                                items={getRenewalCycle()}
                                formik={formik}
                                style={{
                                    height: '40px',
                                    width: '200px',
                                    fontSize: 14,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`서비스코드`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="serviceCode" formik={formik} />
                        </TableCell>
                        <TableCell align="right">
                            <MuiSubButton
                                disabled={!formik.values.statTime}
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
