import { Box, Button, Typography } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import Select from '#/components/common/Select'
import {
    usePermissionSearchActions,
    usePermissionSearchRoleIdState,
} from '#/store/usePermissionSearchStore'

import t from '#/common/libs/trans'

const PermissionTableSearch = () => {
    const roleId = usePermissionSearchRoleIdState()
    const { resetPermissionSearchStore } = usePermissionSearchActions()

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            roleId,
        },
        onSubmit: (form) => {
            console.log(form)
        },
    })

    const roleList = [
        { value: '0', label: '전체', key: 0 },
        { value: '25', label: '일반 사용자', key: 1 },
        { value: '26', label: '요청자', key: 2 },
        { value: '27', label: '검토자', key: 3 },
        { value: '28', label: '승인자', key: 4 },
        { value: '29', label: '운영자', key: 5 },
    ]

    const handleClickSearchRefresh = () => {
        resetPermissionSearchStore()
    }

    return (
        <Box>
            <Box component={'form'} onSubmit={formik.handleSubmit} sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Typography>{t('email', 'permission')}</Typography>
                    <TextInput
                        name={'email'}
                        placeholder={t('placeholder.email', 'permission')}
                        formik={formik}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Typography>{t('name', 'permission')}</Typography>
                    <TextInput
                        name={'name'}
                        placeholder={t('placeholder.name', 'permission')}
                        formik={formik}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Typography>{t('status', 'permission')}</Typography>
                    <Select name={'roleId'} items={roleList} formik={formik} size="small" />
                </Box>
                <Button variant="contained" onClick={handleClickSearchRefresh}>
                    <RefreshIcon />
                </Button>
                <Button variant="contained" type="submit">
                    {t('search', 'permission')}
                </Button>
            </Box>
        </Box>
    )
}

export default PermissionTableSearch
