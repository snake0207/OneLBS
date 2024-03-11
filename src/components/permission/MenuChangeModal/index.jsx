import { useFormik } from 'formik'
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Icon,
    IconButton,
    Typography,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CloseIcon from '@mui/icons-material/Close'
import MenuTable from '#/components/permission/MenuChangeModal/MenuTable'
import { getLayoutState } from '#/store/useLayoutStore'
import usePermissionMenuStore from '#/store/usePermissionMenuStore'

import t from '#/common/libs/trans'

import tableData from '#/components/permission/MenuChangeModal/MenuTable/table.json'

const MenuChangeModal = ({ isOpen, onClose }) => {
    const { themeMode } = getLayoutState()
    const { roleName, roleId } = usePermissionMenuStore()
    const initialValues = () => {
        const list = []
        tableData.forEach((listItem) =>
            listItem.children.forEach((childrenItem) => list.push(childrenItem.permission)),
        )
        return list
    }

    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: (form) => {
            console.log('submit')
            console.log(form)
        },
    })

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="lg">
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Icon>{themeMode === 'light' ? <InfoIcon /> : <InfoIcon />}</Icon>
                    {t('menu_change', 'permission')}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex' }}>
                    <Typography>{t('permission', 'permission')}</Typography>
                    <Typography>{t(`permission_name.${roleName}`, 'permission')}</Typography>
                    <Typography>{roleName.toLowerCase()}</Typography>
                </Box>
                <Typography>
                    {t('total_number_of_people', 'permission', { userCount: 50 })}
                </Typography>
                <MenuTable />
                <Button variant="contained" onSubmit={formik.handleSubmit}>
                    저장
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default MenuChangeModal
