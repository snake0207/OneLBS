import { Box } from '@mui/material'

const PermissionLabel = ({ permission, permissionId }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 1,
                borderRadius: 2,
                borderColor: 2,
            }}
        >
            {permission}
        </Box>
    )
}

export default PermissionLabel
