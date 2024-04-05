import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'
import CheckBox from '#/components/common/input/CheckBox'
import TextInput from '#/components/common/input/TextInput'

const networkTypeList = () => [
    { key: 0, value: 0, label: `LTE` },
    { key: 1, value: 1, label: `3G` },
    { key: 2, value: 2, label: `5G` },
]

const networkTypeLabel = {
    0: { label: 'LTE' },
    1: { label: '3G' },
    2: { label: '5G' },
}

const telecomTypeList = () => [
    { key: 0, value: 0, label: `KT` },
    { key: 1, value: 1, label: `SKT` },
    { key: 2, value: 2, label: `U+` },
]
const telecomTypeLabel = {
    0: { label: 'KT' },
    1: { label: 'SKT' },
    2: { label: 'U+' },
}

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            networkType: 0,
            telecomType: 0,
            cellid: '',
        },
        onSubmit: (values) => {
            if (onSearch) onSearch({ ...values })
        },
    })

    return (
        <Box sx={style.searchBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell style={style.cellTitle}>{`시설구분`}</TableCell>
                        <TableCell style={style.cellInput}>
                            <Select
                                name={'networkType'}
                                formik={formik}
                                items={networkTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell style={style.cellInput}>
                            <Select
                                name={'telecomType'}
                                formik={formik}
                                items={telecomTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell />
                        <TableCell style={style.cellTitle}>{`Cell-ID`}</TableCell>
                        <TableCell style={{ width: '20%' }}>
                            <TextInput name="cellid" formik={formik} />
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
