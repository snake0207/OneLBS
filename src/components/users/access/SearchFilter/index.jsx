import { Box, Button, Table, TableCell, TableHead, TableRow } from '@mui/material'

import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import t from '#/common/libs/trans'
import Select from '#/components/common/Select'

import style from './style.module'

function SearchFilter({ onSearch }) {
    const getPermissionList = () => [
        { key: 0, value: 0, label: t('all', 'users') },
        { key: 1, value: 1, label: t('general_user', 'users') },
        { key: 2, value: 2, label: t('request_user', 'users') },
        { key: 3, value: 3, label: t('reviewer', 'users') },
        { key: 4, value: 4, label: t('approver', 'users') },
        { key: 5, value: 5, label: t('admin', 'users') },
    ]

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            ip_address: '',
            permission: 0,
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
                        <TableCell>{t('email', 'users')}</TableCell>
                        <TableCell>
                            <TextInput name="email" formik={formik} sx={{ width: 200 }} />
                        </TableCell>
                        <TableCell>{t('name', 'users')}</TableCell>
                        <TableCell>
                            <TextInput name="name" formik={formik} sx={{ width: 200 }} />
                        </TableCell>
                        <TableCell>{t('ip', 'users')}</TableCell>
                        <TableCell>
                            <TextInput name="ip_address" formik={formik} sx={{ width: 200 }} />
                        </TableCell>
                        <TableCell />
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('permission', 'users')}</TableCell>
                        <TableCell>
                            <Select
                                name={'permission'}
                                formik={formik}
                                items={getPermissionList()}
                                sx={{
                                    width: 200,
                                    height: 40,
                                    backgroundColor: 'form.main',
                                    borderRadius: '4px',
                                }}
                            />
                        </TableCell>
                        <TableCell />
                        <TableCell />
                        <TableCell />
                        <TableCell />
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
