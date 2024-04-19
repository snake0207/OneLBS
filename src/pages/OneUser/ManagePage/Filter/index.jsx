import { useFormik } from 'formik'
import { Box, Table, TableCell, TableHead, TableRow } from '@mui/material'

import TextInput from '#/components/common/input/TextInput'
import { MuiSubButton } from '#/components/common/button/MuiButton'

import style from './style.module'
import Select from '#/components/common/Select'
import { authTypeList } from '../authType'

function SearchFilter({ onSearch }) {
    const unionAuthTypeList = () => [
        { key: 'T', value: 'T', label: `전체` },
        ...authTypeList(),
    ]
    const formik = useFormik({
        initialValues: {
            userId: '',
            authType: 'T',
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
                                name={'authType'}
                                formik={formik}
                                items={unionAuthTypeList()}
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
