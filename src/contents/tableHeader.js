import t from '#/common/libs/trans'

export const userPermissionTableHeader = [
    { field: 'No', headerName: 'No.' },
    { field: 'email', headerName: t('email', 'permission') },
    { field: 'name', headerName: t('name', 'permission') },
    { field: 'company_name', headerName: t('company_name', 'permission') },
    { field: 'team_name', headerName: t('team_name', 'permission') },
    { field: 'status', headerName: t('status', 'permission') },
    { field: 'permission', headerName: t('permission', 'permission') },
]

export const menuPermissionTableHeader = [
    { field: 'No', headerName: 'No.', colSpan: 1 },
    { field: 'menu', headerName: t('menu_table_header.menu', 'permission'), colSpan: 2 },
    {
        field: 'approval',
        headerName: t('menu_table_header.approval', 'permission'),
        colSpan: 1,
        code: 'A',
    },
    {
        field: 'create',
        headerName: t('menu_table_header.create', 'permission'),
        colSpan: 1,
        code: 'C',
    },
    {
        field: 'read',
        headerName: t('menu_table_header.read', 'permission'),
        colSpan: 1,
        code: 'R',
    },
    {
        field: 'update',
        headerName: t('menu_table_header.update', 'permission'),
        colSpan: 1,
        code: 'U',
    },
    {
        field: 'delete',
        headerName: t('menu_table_header.delete', 'permission'),
        colSpan: 1,
        code: 'D',
    },
]
