import { Box, Button, Table, TableCell, TableHead, TableRow } from '@mui/material'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import t from '#/common/libs/trans'
import Select from '#/components/common/Select'

import style from './style.module'

function SearchFilter({ onSearch }) {
    const getServiceTypeList = () => [
        { key: 0, value: 0, label: `전체` },
        { key: 1, value: 1, label: `긴급` },
        { key: 2, value: 2, label: `일반` },
        { key: 3, value: 3, label: `예외` },
    ]

    const formik = useFormik({
        initialValues: {
            serviceName: '',
            serviceCode: '',
            cpName: '',
            serviceType: 0,
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
                            <TextInput name="cpName" formik={formik} sx={{ width: '100%' }} />
                        </TableCell>
                        <TableCell>{`서비스 유형`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <Select
                                name={'serviceType'}
                                formik={formik}
                                items={getServiceTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell align="right">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={formik.handleSubmit}
                                sx={style.searchButton}
                            >
                                {t('search', 'users')}
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </Box>
    )
}

export default SearchFilter
