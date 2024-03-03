import { useEffect } from 'react'
import { Box } from '@mui/material'

const MapPoiAdd = ({ setIsOpen, selectedPoi }) => {
    useEffect(() => {
        if (selectedPoi) setIsOpen(false)
    }, [selectedPoi])

    return <Box sx={{ display: 'flex', margin: '10px' }}></Box>
}

export default MapPoiAdd
