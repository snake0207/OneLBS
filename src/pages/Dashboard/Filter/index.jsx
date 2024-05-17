import { Box, Stack, Table, TableCell, TableHead, TableRow } from '@mui/material'
import { useFormik } from 'formik'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import { getRenewalCycle } from '#/common/libs/dashboard'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TextInput from '#/components/common/input/TextInput'
import { useDashboardActions } from '#/store/useDashboardStore'
import style from './style.module'

function SearchFilter({ onSearch }) {
    const { setDashboardStatDate } = useDashboardActions()
    const { setDashboardInterval } = useDashboardActions()

    const formik = useFormik({
        initialValues: {
            date: '',
            renewalCycle: 1,
            serviceCode: '',
        },
        onSubmit: (values) => {
            const statDate = `${values.date.split('-').join('')}`
            console.log(statDate)
            if (onSearch) onSearch({ ...values, statDate })
        },
    })

    const handleChange = (date) => {
        const statDate = date.split('-').join('')
        console.log('stat date : ', statDate)
        setDashboardStatDate(statDate)
    }

    const renewalCycleChange = (event) => {
        const selectedValue = event.value
        console.log('Selected value:', selectedValue)
        setDashboardInterval(selectedValue)
    }

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
                                <DatePickerInput
                                    name={'date'}
                                    formik={formik}
                                    additionalProps={{ onChange: handleChange }}
                                />
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
                                onChange={renewalCycleChange}
                            />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`서비스 코드`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="serviceCode" formik={formik} />
                        </TableCell>
                        <TableCell align="right">
                            <MuiSubButton
                                disabled={!formik.values.date}
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
