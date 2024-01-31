import { Box } from '@mui/material'
import { useEffect, useRef } from 'react'
import { useGoogleMap } from '@react-google-maps/api'

const CustomControl = ({ position, children, style }) => {
    const map = useGoogleMap()
    const ref = useRef()
    useEffect(() => {
        if (map && ref) {
            map.controls[window.google.maps.ControlPosition[position]].push(ref.current)
        }
    }, [map, ref])
    return (
        <Box ref={ref} sx={style}>
            {children}
        </Box>
    )
}

export default CustomControl
