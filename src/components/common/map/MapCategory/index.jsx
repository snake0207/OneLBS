import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const MapCategory = ({ categoryName, children }) => {
    return (
        <Box
            sx={{
                gap: '6px',
                borderRadius: '8px',
                background: '#FFFFFFCC',
                paddingX: '8px',
                paddingY: '14px',
                minWidth: '50px',
                display: 'inline-block',
            }}
        >
            <Box
                sx={{
                    height: '23px',
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                {children}
                <Typography
                    sx={{
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                    }}
                >
                    {categoryName}
                </Typography>
            </Box>
        </Box>
    )
}

export default MapCategory
