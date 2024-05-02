import { useFormik } from 'formik'
import { Box, Table, TableCell, TableHead, TableRow } from '@mui/material'

import Select from '#/components/common/Select'
import TextInput from '#/components/common/input/TextInput'
import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import { unionServiceTypeList } from '#/common/libs/service'


function SearchFilter({ onSearch }) {
    const formik = useFormik({
        initialValues: {
            serviceName: '',
            serviceCode: '',
            customerName: '',
            serviceType: 'T',
        },
        onSubmit: (values) => {
            if (onSearch) onSearch(values)
        },
    })

    return (
        <Box sx={style.searchBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`서비스명`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="serviceName" formik={formik} sx={{ width: '100%' }} />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`서비스 코드`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="serviceCode" formik={formik} sx={{ width: '100%' }} />
                        </TableCell>
                        <TableCell />
                    </TableRow>
                    <TableRow>
                        <TableCell sx={style.cellTitle}>{`고객사`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="customerName" formik={formik} sx={{ width: '100%' }} />
                        </TableCell>
                        <TableCell>{`서비스 유형`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <Select
                                name={'serviceType'}
                                formik={formik}
                                items={unionServiceTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
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
