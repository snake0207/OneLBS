import { Box, Table, TableCell, TableHead, TableRow } from '@mui/material'
import { useFormik } from 'formik'

import { MuiSubButton } from '#/components/common/button/MuiButton'

import { mncTypeList, networkTypeList } from '#/common/libs/facility'
import Select from '#/components/common/Select'
import TextInput from '#/components/common/input/TextInput'
import style from './style.module'

function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            network: 'C4',
            mnc: '08',
            cellId: '',
        },
        onSubmit: (values) => {
            const _mnc = values.network !== 'LTE' ? '08' : values.mnc
            if (onSearch) onSearch({ ...values, mnc: _mnc })
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
                                name={'network'}
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
                        {formik.values.network === 'C4' && (
                            <TableCell style={style.cellInput}>
                                <Select
                                    name={'mnc'}
                                    formik={formik}
                                    items={mncTypeList()}
                                    sx={{
                                        width: '100%',
                                        height: 40,
                                        backgroundColor: 'form.main',
                                        borderRadius: '4px',
                                    }}
                                />
                            </TableCell>
                        )}
                        <TableCell />
                        <TableCell style={style.cellTitle}>{`Cell-ID`}</TableCell>
                        <TableCell style={{ width: '20%' }}>
                            <TextInput name="cellId" formik={formik} />
                        </TableCell>
                        <TableCell align="right">
                            <MuiSubButton
                                disabled={!formik.values.cellId}
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
