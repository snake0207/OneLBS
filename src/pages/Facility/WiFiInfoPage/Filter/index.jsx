import { Box, Table, TableCell, TableHead, TableRow } from '@mui/material'
import { useFormik } from 'formik'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import { wifiSourceTypeList } from '#/common/libs/facility'
import Select from '#/components/common/Select'
import TextInput from '#/components/common/input/TextInput'
import style from './style.module'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            source: 'W',
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
                                name={'source'}
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
