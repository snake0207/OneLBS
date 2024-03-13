import { TableCell, TableRow } from '@mui/material'
import TableCheckBoxCell from '#/components/permission/MenuChangeModal/MenuTable/MenuTableRow/TableCheckBoxCell'

import t from '#/common/libs/trans'

const MenuTableRow = ({ menuList, formik, rowIndex }) => {
    return (
        <>
            <TableRow>
                <TableCell rowSpan={menuList.children.length}>{menuList.number}</TableCell>
                <TableCell rowSpan={menuList.children.length}>
                    {t(`menu.${menuList.label}`, 'permission')}
                </TableCell>
                <TableCell>{t(`menu.${menuList.label}`, 'permission')}</TableCell>
                <TableCheckBoxCell nestedRowIndex={0} rowIndex={rowIndex} formik={formik} />
            </TableRow>
            {menuList.children.map((item, idx) => {
                if (idx !== 0)
                    return (
                        <TableRow key={item.menuId}>
                            <TableCell>{t(`menu.${item.label}`, 'permission')}</TableCell>
                            <TableCheckBoxCell
                                formik={formik}
                                nestedRowIndex={idx}
                                rowIndex={rowIndex}
                            />
                        </TableRow>
                    )
            })}
        </>
    )
}

export default MenuTableRow
