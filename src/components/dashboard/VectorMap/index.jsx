import { Box } from '@mui/material'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import geoJson from '#/assets/data/vectorMapGeo.json'
import CountryTooltip from '#/components/dashboard/CountryTooltip'
import InfoIcon from '@mui/icons-material/Info'

const VectorMap = () => {
    const mockData = [
        { icon: <InfoIcon />, category: 'evCharging', count: '001' },
        { icon: <InfoIcon />, category: 'fuel', count: '002' },
        { icon: <InfoIcon />, category: 'parking', count: '003' },
        { icon: <InfoIcon />, category: 'h2Charging', count: '004' },
        { icon: <InfoIcon />, category: 'dealerPoi', count: '005' },
    ]

    const [selected, setSelected] = useState(null)

    const handleEnterVectorMap = (id) => {
        setSelected(id)
    }

    const handleLeaveVectorMap = () => {
        setSelected(null)
    }

    return (
        <Box
            sx={{
                position: 'relative',
                width: 1198,
                height: 355,
                border: 1,
                overflow: 'hidden',
                bgcolor: 'white',
            }}
        >
            <ComposableMap
                projection={'geoMercator'}
                projectionConfig={{ scale: 80, center: [10, -60] }} // scale: 지도 크기, center: 지도 위치 [x, y]
            >
                <ZoomableGroup>
                    <Geographies geography={geoJson}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    strokeWidth={0}
                                    style={{
                                        default: { fill: '#BFBFBF', outline: 'none' },
                                        hover: { fill: '#004961', outline: 'none' },
                                        pressed: { fill: '#004961', outline: 'none' },
                                    }}
                                    onMouseEnter={() => handleEnterVectorMap(geo.id)}
                                    onMouseLeave={handleLeaveVectorMap}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <Box
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                }}
            >
                <CountryTooltip categoryCountList={mockData} title={'국가명'} />
            </Box>
        </Box>
    )
}

export default VectorMap
