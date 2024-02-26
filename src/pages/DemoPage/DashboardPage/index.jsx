import ShortCutBanner from '#/components/dashboard/ShortCutBanner'
import VectorMap from '#/components/dashboard/VectorMap'
import CountryTooltip from '#/components/dashboard/CountryTooltip'
import { Box } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CategoryCount from '#/components/dashboard/CategoryCount'
import UserTooltip from '#/components/dashboard/UserTooltip'
import VectorMapTooltip from '#/components/dashboard/VectorMap/VectorMapTooltip'

const DashboardPage = () => {
    const CountryTooltipMockData = [
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'evCharging', count: '001' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'fuel', count: '002' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'parking', count: '003' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'h2Charging', count: '004' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'dealerPoi', count: '005' },
    ]

    return (
        <Box>
            <h1>DashboardPage</h1>
            <h2>Tooltip</h2>
            <p>Count UI</p>
            <div style={{ width: 90 }}>
                <CategoryCount icon={<InfoIcon />} categoryName={'카테고리'} count={'123'} />
            </div>
            <p>Country Tooltip</p>
            <CountryTooltip categoryCountList={CountryTooltipMockData} title={'국가명'} />
            <p>User Tooltip</p>
            <UserTooltip />
            <p>VectorMap Tooltip</p>
            <VectorMapTooltip categoryCountList={CountryTooltipMockData} title={'국가명'} />
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
