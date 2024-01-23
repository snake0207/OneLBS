import { Box } from '@mui/material'
import Divider from '@mui/material/Divider'
import LanguageIcon from '@mui/icons-material/Language'
const MapPoiDetail = () => {
    return (
        <Box>
            <Box>Times Square</Box>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LanguageIcon /> 40.758077
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LanguageIcon /> 40.758077
            </Box>
        </Box>
    )
}

export default MapPoiDetail
