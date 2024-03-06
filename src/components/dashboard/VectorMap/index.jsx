import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import geoJson from '#/assets/data/vectorMapGeo.json'

const VectorMap = () => {
    const [selected, setSelected] = useState(null)
    const [device, setDevice] = useState('desktop')

    const handleEnterVectorMap = (id) => {
        setSelected(id)
    }

    const handleLeaveVectorMap = () => {
        setSelected(null)
    }

    useEffect(() => {
        const width = window.innerWidth
        if (width <= 599) {
            setDevice('mobile')
        } else if (width <= 1024) {
            setDevice('tablet')
        } else {
            setDevice('desktop')
        }
    }, [])

    const projectionConfig = {
        desktop: { scale: 60, center: [80, -75] },
        tablet: { scale: 120, center: [10, 50] },
        mobile: { scale: 100, center: [10, 50] },
    }

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            <ComposableMap
                projection={'geoMercator'}
                projectionConfig={{ ...projectionConfig[device] }} // scale: 지도 크기, center: 지도 위치 [x, y]
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
        </Box>
    )
}

export default VectorMap
