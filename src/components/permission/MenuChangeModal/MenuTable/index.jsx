import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { useFormik } from 'formik'
import MenuTableRow from '#/components/permission/MenuChangeModal/MenuTable/MenuTableRow'
import { permissionLabelColor } from '#/contents/color'
import { menuPermissionTableHeader } from '#/contents/tableHeader'
import { QUERY_KEYS } from '#/contents/queryKeys'
import { usePutModifyRoleMenu } from '#/hooks/queries/permission'
import { usePermissionMenuRoleIdState } from '#/store/usePermissionMenuStore'
import { usePopupActions } from '#/store/usePopupStore'

import { formatPermissionMenuData } from '#/common/libs/formatData'
import t from '#/common/libs/trans'

import style from './style.module'

const MenuTable = ({ data }) => {
    const roleId = usePermissionMenuRoleIdState()
    const queryClient = useQueryClient()
    const { showPopup } = usePopupActions()
    const { mutate } = usePutModifyRoleMenu()

    const formik = useFormik({
        initialValues: data,
        onSubmit: (form) => {
            showPopup('confirm', t('alert.permission_menu_change_confirm', 'permission'), () => {
                mutate(
                    {
                        roleId,
                        menuPermissionList: formatPermissionMenuData(form),
                    },
                    {
                        onSuccess: () => {
                            queryClient.invalidateQueries({
                                queryKey: [QUERY_KEYS.permission.getRoleMenu, roleId],
                            })
                            queryClient.invalidateQueries({
                                queryKey: [QUERY_KEYS.permission.roleMenuPermission],
                            })
                            showPopup(
                                'alert',
                                t('alert.permission_menu_change_success', 'permission'),
                            )
                        },
                    },
                )
            })
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        {menuPermissionTableHeader.map((item) => (
                            <TableCell key={item.field} colSpan={item.colSpan} align="center">
                                <Typography color={permissionLabelColor[item.code]}>
                                    {item.headerName}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, idx) => (
                        <MenuTableRow key={idx} menuList={item} rowIndex={idx} formik={formik} />
                    ))}
                </TableBody>
            </Table>
            <Button variant="contained" type="submit" sx={style.darkBlueButton}>
                {t('save', 'permission')}
            </Button>
        </form>
    )
}

export default MenuTable
