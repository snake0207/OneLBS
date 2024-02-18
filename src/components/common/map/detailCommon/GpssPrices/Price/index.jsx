import { Box, Typography } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save.js'
import EditIcon from '@mui/icons-material/Edit.js'
import IconButton from '@mui/material/IconButton'

const Price = ({ dataType, formik, price, index }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography>가격</Typography>
                </Box>
                <Box>
                    <Typography>1000</Typography>
                </Box>
                <IconButton
                    sx={{
                        ml: 'auto',
                        minWidth: '15px',
                        width: '30px',
                        minHeight: '15px',
                        height: '30px',
                    }}
                >
                    <EditIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography>단위 당 가격</Typography>
                </Box>
                <Box>
                    <Typography>100</Typography>
                </Box>
                <IconButton
                    sx={{
                        ml: 'auto',
                        minWidth: '15px',
                        width: '30px',
                        minHeight: '15px',
                        height: '30px',
                    }}
                >
                    <EditIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography>통화 코드</Typography>
                </Box>
                <Box>
                    <Typography>EUR</Typography>
                </Box>
                <IconButton
                    sx={{
                        ml: 'auto',
                        minWidth: '15px',
                        width: '30px',
                        minHeight: '15px',
                        height: '30px',
                    }}
                >
                    <EditIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Typography>통화 단위</Typography>
                </Box>
                <Box>
                    <Typography>€</Typography>
                </Box>
                <IconButton
                    sx={{
                        ml: 'auto',
                        minWidth: '15px',
                        width: '30px',
                        minHeight: '15px',
                        height: '30px',
                    }}
                >
                    <EditIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Price
