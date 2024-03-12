import { useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { TableCell, TableRow } from '@mui/material'
import Select from '#/components/common/Select'
import { usePutTargetUserIdRole } from '#/hooks/queries/permission'
import { usePopupActions } from '#/store/usePopupStore'
import usePermissionSearchStore from '#/store/usePermissionSearchStore'
import { QUERY_KEYS } from '#/contents/queryKeys'
import { ROLE_LIST } from '#/contents/constant'

import t from '#/common/libs/trans'

const PermissionTableRow = ({
    number,
    userId,
    email,
    name,
    companyName,
    teamName,
    statusName,
    roleId,
}) => {
    const {
        page,
        email: searchEmail,
        name: searchName,
        roleId: searchRoleId,
    } = usePermissionSearchStore()
    const { showPopup } = usePopupActions()
    const [userPermission, setUserPermission] = useState(roleId)
    const queryClient = useQueryClient()
    const { mutate } = usePutTargetUserIdRole()

    const onChangeUserPermission = (event) => {
        showPopup('confirm', t('alert.permission_change_confirm', 'permission'), () => {
            mutate(
                { targetUserId: userId, roleId },
                {
                    onSuccess: () => {
                        setUserPermission(event.value)
                        queryClient.fetchQuery({
                            queryKey: [
                                QUERY_KEYS.permission.roleChangeUserList,
                                page,
                                searchEmail,
                                searchName,
                                searchRoleId,
                            ],
                        })
                        showPopup('alert', t('alert.permission_change_success', 'permission'))
                    },
                },
            )
        })
    }

    useEffect(() => {
        setUserPermission(roleId)
    }, [roleId])

    return (
        <TableRow>
            <TableCell>{number}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{companyName}</TableCell>
            <TableCell>{teamName}</TableCell>
            <TableCell>{t(`${statusName}`, 'permission')}</TableCell>
            <TableCell>
                <Select
                    name="roleId"
                    items={ROLE_LIST}
                    onChange={onChangeUserPermission}
                    value={userPermission}
                    size="small"
                />
            </TableCell>
        </TableRow>
    )
}

export default PermissionTableRow
