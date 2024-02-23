import ShortCutBanner from '#/components/dashboard/ShortCutBanner'
import VectorMap from '#/components/dashboard/VectorMap'
import CountryTooltip from '#/components/dashboard/VectorMap/CountryTooltip'
import { Box } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CategoryCount from '#/components/dashboard/CategoryCount'

const DashboardPage = () => {
    return (
        <Box>
            <h1>DashboardPage</h1>
            <h2>Tooltip</h2>
            <p>Count UI</p>
            <div style={{ width: 90 }}>
                <CategoryCount icon={<InfoIcon />} categoryName={'국가명'} count={'123'} />
            </div>
            <p>Country Tooltip</p>
            <div style={{ position: 'relative', width: 500, height: 200 }}>
                <CountryTooltip />
            </div>
            <h2>VectorMap</h2>
            <VectorMap />
            <h2>ShortCut Banner</h2>
            <ShortCutBanner
                bannerTitle={'바로가기 베너 이름'}
                bannerDesc={'바로가기 베너 설명'}
                path={'/components/dashboard'}
                icon={
                    <InfoIcon
                        fontSize="large"
                        sx={{ position: 'absolute', right: 18, bottom: 10 }}
                    />
                }
            />
        </Box>
    )
}

export default DashboardPage
