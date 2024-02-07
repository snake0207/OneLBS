import { Box, Divider } from '@mui/material'

function NotifyItem({ item, onClick }) {
    const handleClick = () => {
        //console.log('handleClick', item?.title)
        if (onClick) onClick(item)
    }

    return (
        <Box>
            <Divider />
            <Box sx={{ p: 1 }} onClick={handleClick}>
                {item?.title}
            </Box>
        </Box>
    )
}

export default NotifyItem
