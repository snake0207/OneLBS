import { Box, Button, Stack, Table, TableCell, TableHead, TableRow } from '@mui/material'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import t from '#/common/libs/trans'
import Select from '#/components/common/Select'
import DatePickerInput from '#/components/common/input/DatePickerInput'

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
            permission: 0,
            start_date: null,
            end_date: null,
        },
        onSubmit: (values) => {
            if (onSearch) onSearch(values)
        },
    })

    return (
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell />
                        <TableCell />
                        <TableCell align="right">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={formik.handleSubmit}
                            >
                                {t('search', 'users')}
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('email', 'users')}</TableCell>
                        <TableCell>
                            <TextInput name="email" formik={formik} sx={{ width: 200 }} />
                        </TableCell>
                        <TableCell>{t('permission', 'users')}</TableCell>
                        <TableCell>
                            <Select
                                name={'permission'}
                                formik={formik}
                                items={getPermissionList()}
                                sx={{ width: 200, height: 40 }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('period', 'users')}</TableCell>
                        <TableCell>
                            <Stack direction="row" spacing={1}>
                                <DatePickerInput name="start_date" formik={formik} />
                                <Box> ~ </Box>
                                <DatePickerInput name="end_date" formik={formik} />
                            </Stack>
                        </TableCell>
                        <TableCell />
                        <TableCell />
                    </TableRow>
                </TableHead>
            </Table>
        </Box>
    )
}

export default SearchFilter
