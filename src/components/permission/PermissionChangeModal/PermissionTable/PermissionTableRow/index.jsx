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
    const queryClient = useQueryClient()
    const { mutate } = usePutTargetUserIdRole()

    const onChangeUserPermission = (event) => {
        showPopup('confirm', t('alert.permission_change_confirm', 'permission'), () => {
            mutate(
                { userId, roleId: event.value },
                {
                    onSuccess: () => {
                        queryClient.invalidateQueries({
                            queryKey: [
                                QUERY_KEYS.permission.roleChangeUserList,
                                page,
                                searchEmail,
                                searchName,
                                searchRoleId,
                            ],
                        })
                        queryClient.invalidateQueries({
                            queryKey: [QUERY_KEYS.permission.roleMenuPermission],
                        })
                        showPopup('alert', t('alert.permission_change_success', 'permission'))
                    },
                },
            )
        })
    }

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
                    value={roleId}
                    size="small"
                />
            </TableCell>
        </TableRow>
    )
}

export default PermissionTableRow
