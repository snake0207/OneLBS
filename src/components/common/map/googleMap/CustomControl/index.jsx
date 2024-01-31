import { Box } from '@mui/material'
import { useEffect, useRef } from 'react'
import { useGoogleMap } from '@react-google-maps/api'

const CustomControl = (props) => {
    const { children, position } = props
    const map = useGoogleMap()
    const ref = useRef()
    useEffect(() => {
        if (map && ref) {
            map.controls[new window.google.maps.ControlPosition[position]()].push(ref.current)
        }
    }, [map, ref])
    return <Box ref={ref}>{children}</Box>
}

export default CustomControl
