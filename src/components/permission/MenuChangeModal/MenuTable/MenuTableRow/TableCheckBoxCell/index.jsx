import { Checkbox, TableCell } from '@mui/material'

const TableCheckBoxCell = ({ nestedRowIndex, rowIndex, formik }) => {
    return (
        <>
            <TableCell align="center">
                <Checkbox
                    name={`[${rowIndex}].children[${nestedRowIndex}].permission.approval`}
                    onChange={formik.handleChange}
                    checked={formik.values[rowIndex].children[nestedRowIndex].permission.approval}
                />
            </TableCell>
            <TableCell align="center">
                <Checkbox
                    name={`[${rowIndex}].children[${nestedRowIndex}].permission.create`}
                    onChange={formik.handleChange}
                    checked={formik.values[rowIndex].children[nestedRowIndex].permission.create}
                />
            </TableCell>
            <TableCell align="center">
                <Checkbox
                    name={`[${rowIndex}].children[${nestedRowIndex}].permission.read`}
                    onChange={formik.handleChange}
                    checked={formik.values[rowIndex].children[nestedRowIndex].permission.read}
                />
            </TableCell>
            <TableCell align="center">
                <Checkbox
                    name={`[${rowIndex}].children[${nestedRowIndex}].permission.update`}
                    onChange={formik.handleChange}
                    checked={formik.values[rowIndex].children[nestedRowIndex].permission.update}
                />
            </TableCell>
            <TableCell align="center">
                <Checkbox
                    name={`[${rowIndex}].children[${nestedRowIndex}].permission.delete`}
                    onChange={formik.handleChange}
                    checked={formik.values[rowIndex].children[nestedRowIndex].permission.delete}
                />
            </TableCell>
        </>
    )
}

export default TableCheckBoxCell
