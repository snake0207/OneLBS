import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'
import TimePickerInput from '#/components/common/input/TimePickerInput'
import CheckBox from '#/components/common/input/CheckBox'
import TextInput from '#/components/common/input/TextInput'

const sourceTypeList = () => [
    { key: 0, value: 0, label: `WiNG` },
    { key: 1, value: 1, label: `CS` },
    { key: 2, value: 2, label: `VOC` },
]

const sourceTypeLabel = {
    0: { label: 'WiNG' },
    1: { label: 'CS' },
    2: { label: 'VOC' },
}

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            sourceType: 0,
            mac: '',
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
                                name={'sourceType'}
                                formik={formik}
                                items={sourceTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell />
                        <TableCell style={style.cellTitle}>{`MAC 주소`}</TableCell>
                        <TableCell style={{ width: '20%' }}>
                            <TextInput name="mac" formik={formik} />
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
