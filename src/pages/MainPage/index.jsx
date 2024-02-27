import CountryTooltip from '#/components/dashboard/CountryTooltip'
import UserTooltip from '#/components/dashboard/UserTooltip'
import { Box } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import VectorMap from '#/components/dashboard/VectorMap'
import ShortCutBanner from '#/components/dashboard/ShortCutBanner'
import VectorMapTooltip from '#/components/dashboard/VectorMapTooltip'

function MainPage() {
    const countryMockData = [
        { icon: <InfoIcon />, category: 'evCharging', count: '005' },
        { icon: <InfoIcon />, category: 'fuel', count: '004' },
        { icon: <InfoIcon />, category: 'parking', count: '003' },
        { icon: <InfoIcon />, category: 'h2Charging', count: '002' },
        { icon: <InfoIcon />, category: 'dealerPoi', count: '001' },
    ]

    const VectorMapMockData = [
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'evCharging', count: '001' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'fuel', count: '002' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'parking', count: '003' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'h2Charging', count: '004' },
        { lightIcon: <InfoIcon />, darkIcon: <InfoIcon />, category: 'dealerPoi', count: '005' },
    ]

    const shortCutMockData = [
        {
            title: '시간 별 통계',
            desc: 'MCP POI를 시간대 별로 확인 하실 수 있습니다.',
            path: '/',
            icon: <InfoIcon />,
        },
        {
            title: '지역 별 통계',
            desc: 'MCP POI를 시간대 별로 확인 하실 수 있습니다.',
            path: '/',
            icon: <InfoIcon />,
        },
        {
            title: 'CP 별 통계',
            desc: 'MCP POI를 시간대 별로 확인 하실 수 있습니다.',
            path: '/',
            icon: <InfoIcon />,
        },
        {
            title: '사용자 별 통계',
            desc: 'MCP POI를 시간대 별로 확인 하실 수 있습니다.',
            path: '/',
            icon: <InfoIcon />,
        },
    ]

    return (
        <Box>
            <Box>
                <UserTooltip />
                <CountryTooltip title={'Europe'} categoryCountList={countryMockData} />
            </Box>
            <Box sx={{ display: 'flex', p: 1, bgcolor: 'white', borderRadius: 2 }}>
                <VectorMap />
                <VectorMapTooltip categoryCountList={VectorMapMockData} title={'국가명'} />
            </Box>
            <Box sx={{ display: 'flex' }}>
                {shortCutMockData.map((item, idx) => (
                    <ShortCutBanner
                        key={idx}
                        bannerTitle={item.title}
                        bannerDesc={item.desc}
                        path={item.path}
                        icon={item.icon}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default MainPage
