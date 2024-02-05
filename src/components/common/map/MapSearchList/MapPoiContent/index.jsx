import { ListItem, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { useMapActions } from '#/store/useMapStore.js'

const MapPoiContent = ({ idx, name, address, isLast, selectedPoi, setSelectedPoi }) => {
    const { setHoveredPoi } = useMapActions()
    // 주석 추가
    return (
        <>
            <ListItem>
                <ListItemButton selected={idx === selectedPoi} onClick={() => setSelectedPoi(idx)}>
                    <ListItemText
                        onMouseOver={() => setHoveredPoi(idx)}
                        onMouseLeave={() => setHoveredPoi(null)}
                        primary={<Typography variant={'h6'}>{name}</Typography>}
                        secondary={
                            <Typography sx={{ color: '#666666', fontWeight: 300 }}>
                                {address}
                            </Typography>
                        }
                    />
                </ListItemButton>
            </ListItem>
            {isLast ? '' : <Divider />}
        </>
    )
}

export default MapPoiContent
