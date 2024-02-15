import IPRecord from '../IPRecord'

import t from '#/common/libs/trans'
import { useEffect, useState } from 'react'
import { usePopupActions } from '#/store/usePopupStore'

function IPManage({ ipAddresses }) {
    const [ipList, setIpList] = useState([])
    const popupActions = usePopupActions()

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
        popupActions.showPopup('alert', t('popup_modify', 'profile'))
    }

    const handleDelete = (ip, index) => {
        console.log('delete', ip, index)

        popupActions.showPopup('confirm', t('popup_delete_confirm', 'profile'), () => {
            // remove ip from list
            if (ipList.length === 1) {
                console.log('reset', ip, index)
                setIpList([{ ip_address: '', description: '' }])
            } else {
                const newIpList = ipList.filter((_, i) => i !== index)
                setIpList(newIpList)
            }

            popupActions.showPopup('alert', t('popup_delete', 'profile'))
        })
    }

    const handleAutoInput = (value, index) => {
        console.log('autoInput', value, index)
        const newIpList = ipList.map((ip, i) => {
            if (i === index) {
                return {
                    ...ip,
                    ip_address: value,
                }
            }
            return ip
        })
        setIpList(newIpList)
    }

    return ipList?.map((ip, index) => (
        <IPRecord
            key={index}
            ip={ip}
            ipAddresses={ipList}
            onAdd={handleAdd}
            onEdit={(values) => handleEdit(values, index)}
            onDelete={() => handleDelete(ip, index)}
            onAutoInput={(value) => handleAutoInput(value, index)}
        />
    ))
}

export default IPManage
