import { Stack } from '@mui/material'

const FlexEndButtonContainer = ({ children }) => {
    return (
        <Stack sx={{ alignItems: 'flex-end', alignSelf: 'end', gap: 2, mt: 7 }}>{children}</Stack>
    )
}

export default FlexEndButtonContainer
