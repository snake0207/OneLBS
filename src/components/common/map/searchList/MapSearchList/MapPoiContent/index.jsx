import { Box, Chip, ListItem, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { useMapActions } from '#/store/useMapStore.js'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import { markerImage } from '#/common/libs/mapMarker.js'

const MapPoiContent = ({ isLast, isGpssSearch, selectedPoi, setSelectedPoi, poiData }) => {
    const { poiId, title, address, cpType, progress, country, category } = poiData
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
                                        maxWidth: 'calc(100% - 50px)',
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
                                        src={markerImage(category, cpType)}
                                        style={{
                                            verticalAlign: 'middle',
                                            paddingRight: '4px',
                                            width: '16px',
                                        }}
                                    />
                                    {title}
                                </Typography>
                                <Box sx={{ display: 'flex', ml: 'auto' }}>
                                    {isGpssSearch &&
                                        progress &&
                                        (progress === 'reviewing' ? (
                                            <Chip
                                                label={'검토대기'}
                                                sx={{
                                                    color: 'button.lineblue',
                                                    width: '62px',
                                                    height: '24px',
                                                    fontSize: '12px',
                                                    fontWeight: 500,
                                                    backgroundColor: 'transparent',
                                                    border: '1px solid',
                                                    borderColor: 'button.lineblue',
                                                    '& .MuiChip-label': {
                                                        p: '0',
                                                    },
                                                }}
                                            />
                                        ) : (
                                            <Chip
                                                label={'승인대기'}
                                                variant="outlined"
                                                sx={{
                                                    color: 'white',
                                                    width: '62px',
                                                    height: '24px',
                                                    fontSize: '12px',
                                                    border: 'none',
                                                    backgroundColor: 'button.map',
                                                    '& .MuiChip-label': {
                                                        p: '0',
                                                    },
                                                }}
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
