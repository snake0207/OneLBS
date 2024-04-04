import { useFormik } from 'formik'
import { Box, Table, TableCell, TableHead, TableRow } from '@mui/material'

import TextInput from '#/components/common/input/TextInput'
import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import { permissionTypeList } from '../permissionType'

function SearchFilter({ onSearch }) {
    const unionPermissionTypeList = () => [
        { key: 9, value: 9, label: `전체` },
        ...permissionTypeList(),
    ]
    const formik = useFormik({
        initialValues: {
            userId: '',
            permission: 9,
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
                        <TableCell sx={style.cellTitle}>{`권한`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <Select
                                name={'permission'}
                                formik={formik}
                                items={unionPermissionTypeList()}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell sx={style.cellTitle}>{`아이디`}</TableCell>
                        <TableCell sx={style.cellInput}>
                            <TextInput name="userId" formik={formik} sx={{ width: '100%' }} />
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
