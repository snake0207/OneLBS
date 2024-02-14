import { ListItem, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { useMapActions } from '#/store/useMapStore.js'
import PointBlueIcon from '#/assets/pointBlueIcon.svg'

const MapPoiContent = ({ idx, name, address, isLast, selectedPoi, setSelectedPoi }) => {
    const { setHoveredPoi } = useMapActions()
    return (
        <>
            <ListItem sx={{ padding: 0 }}>
                <ListItemButton selected={idx === selectedPoi} onClick={() => setSelectedPoi(idx)}>
                    <ListItemText
                        onMouseOver={() => setHoveredPoi(idx)}
                        onMouseLeave={() => setHoveredPoi(null)}
                        primary={
                            <Typography
                                variant={'h6'}
                                sx={{ color: '#05141F', fontWeight: 600, fontSize: 18, mb: '4px' }}
                            >
                                <img
                                    src={PointBlueIcon}
                                    style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                />
                                {name}
                            </Typography>
                        }
                        secondary={
                            <Typography sx={{ color: '#444444', fontWeight: 400, fontSize: 14 }}>
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
