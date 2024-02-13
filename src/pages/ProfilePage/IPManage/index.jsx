import { TableCell, TableRow } from '@mui/material'
import IPRecord from '../IPRecord'

import t from '#/common/libs/trans'
import { useEffect, useState } from 'react'

function IPManage({ ipAddresses, onEdit, onDelete }) {
    const [ipList, setIpList] = useState([])

    useEffect(() => {
        if (ipAddresses) {
            setIpList(ipAddresses)
        }
    }, [ipAddresses])

    const handleAdd = () => {
        console.log('add')
        if (ipList.length < 3) {
            setIpList([...ipList, { ip_address: '', description: '' }])
        }
    }

    const handleEdit = (values, index) => {
        const ip_address = `${values.ip1}.${values.ip2}.${values.ip3}.${values.ip4}`
        const description = values.ip_description
        const ip = { ip_address, description }

        console.log('edit', ip, index)
        if (onEdit) onEdit(ip, index)
    }

    const handleDelete = (ip, index) => {
        console.log('delete', ip, index)

        // remove ip from list
        if (ipList.length === 1) {
            console.log('reset', ip, index)
            setIpList([{ ip_address: '', description: '' }])
        } else {
            const newIpList = [...ipList]
            newIpList.splice(index, 1)
            setIpList(newIpList)
        }

        if (onDelete) onDelete(ip, index)
    }

    return ipList?.map((ip, index) => (
        <TableRow key={index}>
            {index === 0 && <TableCell rowSpan={ipList.length}>*{t('ip', 'profile')}</TableCell>}
            <IPRecord
                ip={ip}
                onAdd={handleAdd}
                onEdit={(values) => handleEdit(values, index)}
                onDelete={() => handleDelete(ip, index)}
            />
        </TableRow>
    ))
}

export default IPManage
