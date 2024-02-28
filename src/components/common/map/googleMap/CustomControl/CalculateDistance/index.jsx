import { Box, Typography } from '@mui/material'
import StraightenIcon from '@mui/icons-material/Straighten'
import { useCallback, useEffect, useState } from 'react'
import { InfoBox, Marker, Polyline } from '@react-google-maps/api'

const CalculateDistance = ({
    isDistanceFunctionOn,
    setIsDistanceFunctionOn,
    distanceCoordArr,
    setDistanceCoordArr,
}) => {
    const [distance, setDistance] = useState(0)
    const [totalDistance, setTotalDistance] = useState(0)
    const [metric, setMetric] = useState('m')
    const [infoBox, setInfoBox] = useState([])
    const [marker, setMarker] = useState(null)
    // 거리측정 기능 종료시 초기화
    useEffect(() => {
        if (!isDistanceFunctionOn && distanceCoordArr.length !== 0) {
            setDistanceCoordArr([])
            setDistance(0)
        } else {
            // 마지막 인포박스 제외 나머지 close
            if (infoBox.length >= 2) infoBox.at(-2).close()
            calculateDistance()
        }
    }, [isDistanceFunctionOn, distanceCoordArr])

    // m / km 변환및 총 길이 설정
    useEffect(() => {
        const _distance = distance.toFixed(0)
        if (_distance < 1000) {
            setTotalDistance(_distance)
        } else {
            setTotalDistance(_distance / 1000)
            setMetric('km')
        }
    }, [distance])

    const calculateDistance = useCallback(() => {
        if (distanceCoordArr.length < 2) return
        const lastCoord = distanceCoordArr.at(-1)
        const secondLastCoord = distanceCoordArr.at(-2)
        setDistance(
            distance +
                getDistanceFromLatLonInKm(
                    lastCoord.lat,
                    lastCoord.lng,
                    secondLastCoord.lat,
                    secondLastCoord.lng,
                ),
        )
    }, [distanceCoordArr])

    // 거리측정 Haversine 공식
    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        const R = 6371 * 1000 // 지구의 반지름 (단위: m)
        const dLat = deg2rad(lat2 - lat1)
        const dLon = deg2rad(lon2 - lon1)
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
                Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        const distance = R * c
        return distance
    }
    const deg2rad = (deg) => {
        return deg * (Math.PI / 180)
    }
    return (
        <>
            <Box
                sx={{
                    width: '40px',
                    height: '40px',
                    color: '#666',
                    margin: '10px',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    boxShadow: '#0000004d 0px 1px 4px -1px',
                    backgroundColor: !isDistanceFunctionOn ? '#ffffff' : '#D1D1D1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onClick={() => setIsDistanceFunctionOn(!isDistanceFunctionOn)}
            >
                <StraightenIcon sx={{ fontSize: '25px' }} />
            </Box>
            {distanceCoordArr.length !== 0 && (
                <>
                    {/* polyline */}
                    <Polyline path={distanceCoordArr} />
                    {distanceCoordArr.map((coord, idx) => (
                        <Marker
                            key={idx}
                            position={coord}
                            onLoad={(marker) => {
                                // 마지막 마커 저장
                                if (idx === distanceCoordArr.length - 1) setMarker(marker)
                            }}
                        >
                            {/* 마지막 마커만 인포박스 표시 */}
                            {distanceCoordArr.length > 1 && idx === distanceCoordArr.length - 1 && (
                                <InfoBox
                                    anchor={marker}
                                    onLoad={(info) => {
                                        setInfoBox([...infoBox, info])
                                    }}
                                >
                                    <Box
                                        style={{
                                            backgroundColor: 'yellow',
                                        }}
                                    >
                                        <Typography>
                                            {totalDistance}
                                            {metric}
                                        </Typography>
                                    </Box>
                                </InfoBox>
                            )}
                        </Marker>
                    ))}
                </>
            )}
        </>
    )
}

export default CalculateDistance
