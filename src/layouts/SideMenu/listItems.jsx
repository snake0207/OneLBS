import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import Link from '@mui/material/Link'

export const mainListItems = (
    <React.Fragment>
        <Link href="/" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Main" />
            </ListItemButton>
        </Link>
        <Link href="/statistics" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Statistics" />
            </ListItemButton>
        </Link>
        <Link href="/map" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Map" />
            </ListItemButton>
        </Link>
        <Link href="/etc" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Etc" />
            </ListItemButton>
        </Link>
        <Link href="/etc" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Etc" />
            </ListItemButton>
        </Link>
        <Link href="/etc" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Etc" />
            </ListItemButton>
        </Link>
        <Link href="/etc" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Etc" />
            </ListItemButton>
        </Link>
    </React.Fragment>
)
