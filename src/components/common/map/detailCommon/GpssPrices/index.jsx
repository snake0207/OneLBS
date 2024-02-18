import { Box, Typography } from '@mui/material'
import Price from '#/components/common/map/detailCommon/GpssPrices/Price/index.jsx'

const GpssPrices = ({ dataType, pricesData, formik }) => {
    return (
        <Box>
            <Typography> 가격 </Typography>
            {pricesData.map((price, idx) => (
                <Price dataType={dataType} index={idx} price={price} formik={formik} key={idx} />
            ))}
        </Box>
    )
}

export default GpssPrices
