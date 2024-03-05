import { Box, Chip, ListItem, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { useMapActions } from '#/store/useMapStore.js'
import PointBlueEVIcon from '#/assets/pointBlueEVIcon.svg'
import PointBlueIcon from '#/assets/pointBlueIcon.svg'
import PointRedIcon from '#/assets/pointRedIcon.svg'
import Brightness1Icon from '@mui/icons-material/Brightness1'

const MapPoiContent = ({ isLast, isGpssSearch, selectedPoi, setSelectedPoi, poiData }) => {
    const { poiId, title, address, cpType, progress, country } = poiData
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
                <ListItemButton
                    selected={poiId === selectedPoi}
                    onClick={() => setSelectedPoi(poiId)}
                >
                    <ListItemText
                        onMouseOver={() => setHoveredPoi(poiId)}
                        onMouseLeave={() => setHoveredPoi(null)}
                        primary={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography
                                    variant={'h6'}
                                    sx={{
                                        display: 'block',
                                        maxWidth: '210px',
                                        color: 'text.main',
                                        fontWeight: 600,
                                        fontSize: 18,
                                        mb: '4px',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <img
                                        src={cpType === 'mcp' ? PointBlueIcon : PointRedIcon}
                                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                    />
                                    {title}
                                </Typography>
                                <Box sx={{ display: 'flex', ml: 'auto' }}>
                                    {isGpssSearch &&
                                        progress &&
                                        (progress === 'reviewing' ? (
                                            <Chip label={'검토대기'} color="primary" />
                                        ) : (
                                            <Chip
                                                label={'승인대기'}
                                                color="primary"
                                                variant="outlined"
                                            />
                                        ))}
                                    {/* 국기 들어가는 부분 */}
                                    <Brightness1Icon />
                                </Box>
                            </Box>
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
