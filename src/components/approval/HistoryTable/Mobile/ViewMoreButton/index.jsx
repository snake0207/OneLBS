import { Button, Stack } from '@mui/material'

const ViewMoreButton = ({ onChangePageFunction }) => {
    return (
        <Stack alignItems={'center'}>
            <Button onClick={onChangePageFunction}>더보기</Button>
        </Stack>
    )
}
export default ViewMoreButton
