import { Checkbox, TableCell } from '@mui/material'
import { useFormik } from 'formik'

const TableCheckBoxCell = ({ menuId, approvalYn, createYn, readYn, updateYn, deleteYn }) => {
    const formik = useFormik({
        initialValues: {
            menuId,
            approvalYn,
            createYn,
            readYn,
            updateYn,
            deleteYn,
        },
        onSubmit: (form) => {},
    })

    return (
        <>
            <TableCell align="center">
                <Checkbox
                    name="approvalYn"
                    onChange={formik.handleChange}
                    checked={formik.values.approvalYn}
                />
            </TableCell>
            <TableCell align="center">
                <Checkbox
                    name="createYn"
                    onChange={formik.handleChange}
                    checked={formik.values.createYn}
                />
            </TableCell>
            <TableCell align="center">
                <Checkbox
                    name="readYn"
                    onChange={formik.handleChange}
                    checked={formik.values.readYn}
                />
            </TableCell>
            <TableCell align="center">
                <Checkbox
                    name="updateYn"
                    onChange={formik.handleChange}
                    checked={formik.values.updateYn}
                />
            </TableCell>
            <TableCell align="center">
                <Checkbox
                    name="deleteYn"
                    onChange={formik.handleChange}
                    checked={formik.values.deleteYn}
                />
            </TableCell>
        </>
    )
}

export default TableCheckBoxCell
