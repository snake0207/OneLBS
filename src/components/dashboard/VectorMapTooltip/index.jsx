import { Box, IconButton, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CategoryCount from '#/components/dashboard/CategoryCount'
import useLayoutStore from '#/store/useLayoutStore'
import DE from '#/assets/flag/DE.svg'

import style from './style.module'

const VectorMapTooltip = ({ title, categoryCountList }) => {
    return (
        <Box sx={style.dashboardBox}>
            <Box sx={style.Title}>
                <img src={DE} style={{ width: '36px', marginRight: '10px' }} />
                <Typography>{title}</Typography>
            </Box>
        </Box>
    )
}

export default VectorMapTooltip
