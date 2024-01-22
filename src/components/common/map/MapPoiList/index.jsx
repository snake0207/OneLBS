import { Box, Typography } from '@mui/material'
import MapPoiContent from '#/components/common/map/MapPoiList/MapPoiContent/index.jsx'
import List from '@mui/material/List'
import { useState } from 'react'

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
]

const MapPoiList = ({ isResultNon }) => {
    const [selectedPoi, setSelectedPoi] = useState(null)
    return (
        <Box
            sx={{
                width: '350px',
                padding: '2px',
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
                sampleData && (
                    <List sx={{ width: '100%' }}>
                        {sampleData.map((data, idx) => (
                            <MapPoiContent
                                key={idx}
                                idx={idx}
                                name={data.name}
                                address={data.address}
                                selectedPoi={selectedPoi}
                                setSelectedPoi={setSelectedPoi}
                                isLast={sampleData.length - 1 === idx}
                            />
                        ))}
                    </List>
                )
            )}
        </Box>
    )
}

export default MapPoiList
