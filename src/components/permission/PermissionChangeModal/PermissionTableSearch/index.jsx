import { Box, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import Select from '#/components/common/Select'
import {
    usePermissionSearchActions,
    usePermissionSearchRoleIdState,
} from '#/store/usePermissionSearchStore'

import t from '#/common/libs/trans'

import style from './style.module'
import ResetIcon from '#/assets/resetIcon.svg'

const PermissionTableSearch = () => {
    const roleId = usePermissionSearchRoleIdState()
    const { resetPermissionSearchStore } = usePermissionSearchActions()
    const { setPermissionSearchStore } = usePermissionSearchActions()
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            roleId,
        },
        onSubmit: (form) => {
            setPermissionSearchStore(form)
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
        <Box sx={style.searchBox}>
            <Box component={'form'} onSubmit={formik.handleSubmit} sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Typography sx={style.labelText}>{t('email', 'permission')}</Typography>
                    <TextInput
                        name={'email'}
                        placeholder={t('placeholder.email', 'permission')}
                        formik={formik}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, ml: '20px' }}>
                    <Typography sx={style.labelText}>{t('name', 'permission')}</Typography>
                    <TextInput
                        name={'name'}
                        placeholder={t('placeholder.name', 'permission')}
                        formik={formik}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, ml: '20px' }}>
                    <Typography sx={style.labelText}>{t('status', 'permission')}</Typography>
                    <Select name={'roleId'} items={roleList} formik={formik} size="small" />
                </Box>
                <Button
                    variant="contained"
                    onClick={handleClickSearchRefresh}
                    sx={style.ResetButton}
                >
                    <img src={ResetIcon} />
                </Button>
                <Button variant="contained" type="submit" sx={style.searchButton}>
                    {t('search', 'permission')}
                </Button>
            </Box>
        </Box>
    )
}

export default PermissionTableSearch
