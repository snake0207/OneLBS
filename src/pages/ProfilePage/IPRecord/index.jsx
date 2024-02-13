import { Button, TableCell } from '@mui/material'
import { IpInput } from '#/components/common/input/IpInput'
import { useFormik } from 'formik'
import * as yup from 'yup'

import t from '#/common/libs/trans'
import { useEffect } from 'react'
import CheckBox from '#/components/common/input/CheckBox'
import { useGetUserIp } from '#/hooks/queries/auth'

function IPRecord({ ip, onAdd, onEdit, onDelete }) {
    const { data } = useGetUserIp()
    const formik = useFormik({
        initialValues: {
            ip1: ip?.ip_address.split('.')[0],
            ip2: ip?.ip_address.split('.')[1],
            ip3: ip?.ip_address.split('.')[2],
            ip4: ip?.ip_address.split('.')[3],
            ip_description: ip?.description,
        },
        validationSchema: yup.object().shape({
            ip1: yup.number().required('Required'),
            ip2: yup.number().required('Required'),
            ip3: yup.number().required('Required'),
            ip4: yup.number().required('Required'),
        }),
        onSubmit: (values) => {
            if (onEdit) onEdit(values)
        },
    })

    useEffect(() => {
        if (ip?.ip_address === '') {
            formik.setValues({
                ip1: '',
                ip2: '',
                ip3: '',
                ip4: '',
                ip_description: '',
            })
        }
    }, [ip?.ip_address, ip?.description])

    const handleAdd = () => {
        if (onAdd) onAdd()
    }

    const handleDelete = () => {
        if (onDelete) onDelete()
    }

    const handleAutoInput = (event) => {
        console.log('data', data)
        if (event.target.checked) {
            // formik.setValues({
            //     ip1: data?.ip_address.split('.')[0],
            //     ip2: data?.ip_address.split('.')[1],
            //     ip3: data?.ip_address.split('.')[2],
            //     ip4: data?.ip_address.split('.')[3],
            //     ip_description: data?.description,
            // })
            formik.setValues({
                ...formik.values,
                ip1: '192',
                ip2: '168',
                ip3: '0',
                ip4: '1',
            })
        }
    }

    return (
        <>
            <TableCell>
                <IpInput
                    name="ip"
                    formik={formik}
                    ipName1="ip1"
                    ipName2="ip2"
                    ipName3="ip3"
                    ipName4="ip4"
                >
                    <IpInput.IpDescription formik={formik} ipDescName="ip_description" />
                </IpInput>
            </TableCell>
            <TableCell>
                <CheckBox label={t('auto', 'profile')} onChange={handleAutoInput} />
                <Button onClick={handleAdd}>{t('add', 'profile')}</Button>
                <Button onClick={formik.handleSubmit}>{t('edit', 'profile')}</Button>
                <Button onClick={handleDelete}>{t('delete', 'profile')}</Button>
            </TableCell>
        </>
    )
}

export default IPRecord

// <TableRow>
// <TableCell rowSpan={user?.ip_addresses.length}>
//     *{t('ip', 'profile')}
// </TableCell>
// <TableCell>
//     <TextInput name="ip" formik={formik} />
// </TableCell>
// </TableRow>
// <TableRow>
// <TableCell>
//     <TextInput name="ip" formik={formik} />
// </TableCell>
// </TableRow>
