import { useState } from 'react'

import { TableRow, TableCell, Stack, Button } from '@mui/material'
import t from '#/common/libs/trans'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import { IpInput } from '#/components/common/input/IpInput'

import style from './style.module'

function Row({ row, onEdit, onDelete }) {
    const formik = useFormik({
        initialValues: {
            ip1: '',
            ip2: '',
            ip3: '',
            ip4: '',
            description: '',
        },
    })

    const rowSpan = row?.ip_addresses.length
    const [editable, setEditable] = useState({ index: -1, status: false })

    const handleEditable = (index) => {
        if (!editable.status) {
            // set value to formik
            formik.setValues({
                ip1: row?.ip_addresses[index]?.ip_address.split('.')[0],
                ip2: row?.ip_addresses[index]?.ip_address.split('.')[1],
                ip3: row?.ip_addresses[index]?.ip_address.split('.')[2],
                ip4: row?.ip_addresses[index]?.ip_address.split('.')[3],
                description: row?.ip_addresses[index]?.description,
            })
        } else {
            if (onEdit)
                onEdit({
                    id: row?.id,
                    index: index,
                    ip_address: `${formik.values.ip1}.${formik.values.ip2}.${formik.values.ip3}.${formik.values.ip4}`,
                    description: formik.values.description,
                })
        }
        setEditable({ index, status: !editable.status })
    }

    const handleDelete = (index) => {
        if (onDelete)
            onDelete({
                id: row?.id,
                index: index,
                ip_address: row?.ip_addresses[index]?.ip_address,
            })
    }

    return (
        <>
            {row?.ip_addresses.map((ip, index) => (
                <TableRow key={index}>
                    {index === 0 && <TableCell rowSpan={rowSpan}>{row?.id}</TableCell>}
                    {index === 0 && <TableCell rowSpan={rowSpan}>{row?.email}</TableCell>}
                    {index === 0 && <TableCell rowSpan={rowSpan}>{row?.name}</TableCell>}
                    {index === 0 && <TableCell rowSpan={rowSpan}>{row?.team}</TableCell>}
                    {index === 0 && <TableCell rowSpan={rowSpan}>{row?.permission}</TableCell>}
                    <TableCell>
                        {ip.ip_address}
                        {editable.index === index && editable.status && (
                            <IpInput
                                name="ip_address"
                                ipName1="ip1"
                                ipName2="ip2"
                                ipName3="ip3"
                                ipName4="ip4"
                                formik={formik}
                            />
                        )}
                    </TableCell>

                    <TableCell>
                        {ip.description}
                        {editable.index === index && editable.status && (
                            <TextInput name="description" formik={formik} />
                        )}
                    </TableCell>

                    <TableCell>
                        <Stack
                            direction="row"
                            sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}
                        >
                            <Button onClick={() => handleEditable(index)} sx={style.lineButton}>
                                {t('edit', 'users')}
                            </Button>
                            <Button onClick={() => handleDelete(index)} sx={style.lightButton}>
                                {t('delete', 'users')}
                            </Button>
                        </Stack>
                    </TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default Row
