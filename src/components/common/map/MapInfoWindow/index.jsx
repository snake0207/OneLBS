import { Grid, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

const MapInfoWindow = ({ markerData }) => {
    return (
        markerData && (
            <Grid
                container
                sx={{
                    width: '300px',
                    height: '100px',
                    borderRadius: '8px',
                    border: '1px solid #D1D1D1',
                }}
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '1px solid #D1D1D1',
                    }}
                >
                    <Typography>{markerData ? markerData.title : 'Times Square'}</Typography>
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#D1D1D1',
                    }}
                >
                    <LanguageIcon />
                    {markerData ? markerData.position.center.lat.toFixed(7) : '40.758077'}
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#D1D1D1',
                    }}
                >
                    <LanguageIcon />
                    {markerData ? markerData.position.center.lon.toFixed(7) : '-73.98548'}
                </Grid>
            </Grid>
        )
    )
}

export default MapInfoWindow
