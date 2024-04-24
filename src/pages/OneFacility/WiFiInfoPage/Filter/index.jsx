import { useFormik } from 'formik'
import { Box, Stack, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import TextInput from '#/components/common/input/TextInput'
import { wifiSourceTypeList } from '#/common/libs/facility'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            wifiSourceType: 'W',
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
                                name={'wifiSourceType'}
                                formik={formik}
                                items={wifiSourceTypeList()}
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
                                disabled={!formik.values.mac}
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
