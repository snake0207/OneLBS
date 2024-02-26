import { Box, Typography } from '@mui/material'
import Price from '#/components/common/map/detailCommon/GpssPrices/Price/index.jsx'
import t from '#/common/libs/trans.js'

const GpssPrices = ({ dataType, pricesData, formik }) => {
    return (
        <Box>
            <Typography
                sx={{ m: '10px 0 4px 0', fontSize: '15px', fontWeight: 500, color: 'text.main' }}
            >
                {t('price.title', 'gpss')}
            </Typography>
            {pricesData.map((price, idx) => (
                <Price
                    dataType={dataType}
                    index={idx}
                    priceData={price}
                    formik={formik}
                    key={idx}
                />
            ))}
        </Box>
    )
}

export default GpssPrices
