import { Box } from '@mui/material'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import geoJson from '#/assets/data/vectorMapGeo.json'
import InfoIcon from '@mui/icons-material/Info'
import VectorMapTooltip from '#/components/dashboard/VectorMap/VectorMapTooltip'

const VectorMap = () => {
    const mockData = [
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'evCharging', count: '001' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'fuel', count: '002' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'parking', count: '003' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'h2Charging', count: '004' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'dealerPoi', count: '005' },
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
                <VectorMapTooltip categoryCountList={mockData} title={'국가명'} />
            </Box>
        </Box>
    )
}

export default VectorMap
