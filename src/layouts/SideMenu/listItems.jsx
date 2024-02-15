import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'

export const getMenuIcon = (key) => {
    switch (key) {
        case 'search_management':
            return <DashboardIcon />
        case 'poi_search':
            return <BarChartIcon />
        case 'permit_history':
            return <LayersIcon />
        case 'mcp_poi_statistics':
            return <LayersIcon />
        case 'user_management':
            return <LayersIcon />
        default:
            return null
    }
}
