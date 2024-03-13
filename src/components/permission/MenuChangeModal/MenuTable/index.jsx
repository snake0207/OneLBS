import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MenuTableRow from '#/components/permission/MenuChangeModal/MenuTable/MenuTableRow'
import { permissionLabelColor } from '#/contents/color'
import { menuPermissionTableHeader } from '#/contents/tableHeader'
import { useFormik } from 'formik'

import style from './style.module'
import { formatPermissionMenuData } from '#/common/libs/formatData'

const MenuTable = ({ data }) => {
    const formik = useFormik({
        initialValues: data,
        onSubmit: (form) => {
            console.log(formatPermissionMenuData(form))
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
            <Button variant="contained" type="submit">
                저장
            </Button>
        </form>
    )
}

export default MenuTable
