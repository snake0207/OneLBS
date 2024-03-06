import { Box, Chip, ListItem, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { useMapActions } from '#/store/useMapStore.js'
import PointBlueEVIcon from '#/assets/pointBlueEVIcon.svg'
import PointBlueFuelIcon from '#/assets/pointBlueFuelIcon.svg'
import PointBlueH2Icon from '#/assets/pointBlueH2Icon.svg'
import PointBlueParkingIcon from '#/assets/pointBlueParkingIcon.svg'
import PointBluePoiIcon from '#/assets/pointBluePoiIcon.svg'
import PointRedEVIcon from '#/assets/pointRedEVIcon.svg'
import PointRedFuelIcon from '#/assets/pointRedFuelIcon.svg'
import PointRedH2Icon from '#/assets/pointRedH2Icon.svg'
import PointRedParkingIcon from '#/assets/pointRedParkingIcon.svg'
import PointRedPoiIcon from '#/assets/pointRedPoiIcon.svg'
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
                                        src={cpType === 'mcp' ? PointBlueEVIcon : PointRedEVIcon}
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
