import { TableCell, TableRow } from '@mui/material'
import TableCheckBoxCell from '#/components/permission/MenuChangeModal/MenuTable/MenuTableRow/TableCheckBoxCell'

import t from '#/common/libs/trans'

const MenuTableRow = ({ menuList }) => {
    return (
        <>
            <TableRow>
                <TableCell rowSpan={menuList.children.length}>{menuList.menuOrder}</TableCell>
                <TableCell rowSpan={menuList.children.length}>
                    {t(`menu.${menuList.label}`, 'permission')}
                </TableCell>
                <TableCell>{t(`menu.${menuList.children[0].label}`, 'permission')}</TableCell>
                <TableCheckBoxCell
                    menuId={menuList.children[0].menuId}
                    approvalYn={menuList.children[0].permission.approvalYn}
                    createYn={menuList.children[0].permission.createYn}
                    readYn={menuList.children[0].permission.readYn}
                    updateYn={menuList.children[0].permission.updateYn}
                    deleteYn={menuList.children[0].permission.deleteYn}
                />
            </TableRow>
            {menuList.children.map((item, idx) => {
                if (idx > 0)
                    return (
                        <TableRow key={item.menuId}>
                            <TableCell>{t(`menu.${item.label}`, 'permission')}</TableCell>
                            <TableCheckBoxCell
                                menuId={item.menuId}
                                approvalYn={item.permission.approvalYn}
                                createYn={item.permission.createYn}
                                readYn={item.permission.readYn}
                                updateYn={item.permission.updateYn}
                                deleteYn={item.permission.deleteYn}
                            />
                        </TableRow>
                    )
            })}
        </>
    )
}

export default MenuTableRow
