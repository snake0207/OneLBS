import { ListItem, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { useMapActions } from '#/store/useMapStore.js'
import PointBlueEVIcon from '#/assets/pointBlueEVIcon.svg'

const MapPoiContent = ({ idx, name, address, isLast, selectedPoi, setSelectedPoi }) => {
    const { setHoveredPoi } = useMapActions()
    return (
        <>
            <ListItem
                sx={{
                    padding: 0,
                    '&:hover': {
                        backgroundColor: 'primary.lightBlue',
                    },
                }}
            >
                <ListItemButton selected={idx === selectedPoi} onClick={() => setSelectedPoi(idx)}>
                    <ListItemText
                        onMouseOver={() => setHoveredPoi(idx)}
                        onMouseLeave={() => setHoveredPoi(null)}
                        primary={
                            <Typography
                                variant={'h6'}
                                sx={{
                                    color: 'text.main',
                                    fontWeight: 600,
                                    fontSize: 18,
                                    mb: '4px',
                                }}
                            >
                                <img
                                    src={PointBlueEVIcon}
                                    style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                    width={18}
                                />
                                {name}
                            </Typography>
                        }
                        secondary={
                            <Typography sx={{ color: 'text.main', fontWeight: 400, fontSize: 14 }}>
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
