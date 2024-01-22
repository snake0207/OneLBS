import { Box, Typography } from '@mui/material'
import MapPoiContent from '#/components/common/map/MapPoiContent/index.jsx'

const sampleData = [
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
]

const MapPoiList = ({ isResultNon }) => {
    return (
        <Box
            sx={{
                width: '350px',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid #D1D1D1',
                minHeight: '130px',
                display: isResultNon === true ? 'flex' : '',
                justifyContent: isResultNon === true ? 'center' : '',
                alignItems: isResultNon === true ? 'center' : '',
            }}
        >
            {isResultNon === true ? (
                <Typography>검색 결과가 없습니다</Typography>
            ) : (
                sampleData.map((data, idx) => (
                    <MapPoiContent
                        key={idx}
                        name={data.name}
                        address={data.address}
                        isLast={sampleData.length - 1 === idx}
                    />
                ))
            )}
        </Box>
    )
}

export default MapPoiList
