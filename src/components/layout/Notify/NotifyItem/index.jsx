import { Box, Divider } from '@mui/material'

function NotifyItem({ item, onClick }) {
    const handleClick = () => {
        //console.log('handleClick', item?.title)
        if (onClick) onClick(item)
    }

    return (
        <Box>
            <Divider />
            <Box
                sx={{
                    p: '10px 20px 8px 20px',
                    '&:before': {
                        content: 'attr(title)',
                        display: 'inline-flex',
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#db0024',
                        borderRadius: '30px',
                        mr: '8px',
                    },
                }}
                onClick={handleClick}
            >
                {item?.title}
            </Box>
        </Box>
    )
}

export default NotifyItem
