import { Stack } from '@mui/material'

/**
 * 부모 element에 Flex와 height가 있다면 우측하단으로 잡아주는 컨테이너
 * @param {} children React.node
 * @returns htmlElement
 */
const FlexEndButtonContainer = ({ children }) => {
    return <Stack sx={{ alignSelf: 'end', gap: 2, mt: 'auto' }}>{children}</Stack>
}

export default FlexEndButtonContainer
