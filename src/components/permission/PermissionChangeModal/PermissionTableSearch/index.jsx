import { Box, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'

import t from '#/common/libs/trans'
import Select from '#/components/common/Select'

const PermissionTableSearch = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            permission: '25',
        },
        onSubmit: (form) => {
            console.log(form)
        },
    })

    const roleList = [
        { value: '25', label: '일반 사용자', key: 0 },
        { value: '26', label: '요청자', key: 1 },
        { value: '27', label: '검토자', key: 2 },
        { value: '28', label: '승인자', key: 3 },
        { value: '29', label: '운영자', key: 4 },
    ]

    return (
        <Box>
            <Box component={'form'} onSubmit={formik.handleSubmit} sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Typography>{t('email', 'permission')}</Typography>
                    <TextInput name={'email'} placeholder={'email'} formik={formik} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Typography>{t('name', 'permission')}</Typography>
                    <TextInput name={'email'} placeholder={'email'} formik={formik} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Typography>{t('status', 'permission')}</Typography>
                    <Select name={'permission'} items={roleList} formik={formik} size="small" />
                </Box>
                <Button variant="contained" type="submit">
                    {t('search', 'permission')}
                </Button>
            </Box>
        </Box>
    )
}

export default PermissionTableSearch
