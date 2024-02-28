import CountryTooltip from '#/components/dashboard/CountryTooltip'
import UserTooltip from '#/components/dashboard/UserTooltip'
import { Box } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import VectorMap from '#/components/dashboard/VectorMap'
import ShortCutBanner from '#/components/dashboard/ShortCutBanner'
import VectorMapTooltip from '#/components/dashboard/VectorMapTooltip'

import EvIcon from '#/assets/m_evIcon.svg'
import EvIconDark from '#/assets/m_evIconDark.svg'
import EvIconLight from '#/assets/m_evIconLight.svg'
import FuelIcon from '#/assets/m_fuelIcon.svg'
import FuelIconDark from '#/assets/m_fuelIconDark.svg'
import FuelIconLight from '#/assets/m_fuelIconLight.svg'
import ParkingIcon from '#/assets/m_parkingIcon.svg'
import ParkingIconDark from '#/assets/m_parkingIconDark.svg'
import ParkingIconLight from '#/assets/m_parkingIconLight.svg'
import H2Icon from '#/assets/m_h2Icon.svg'
import H2IconDark from '#/assets/m_h2IconDark.svg'
import H2IconLight from '#/assets/m_h2IconLight.svg'
import DealerPoiIcon from '#/assets/m_dealerPoiIcon.svg'
import DealerPoiIconDark from '#/assets/m_dealerPoiIconDark.svg'
import DealerPoiIconLight from '#/assets/m_dealerPoiIconLight.svg'
import TimeIcon from '#/assets/m_timeIcon.svg'
import TimeIconDark from '#/assets/m_timeIconDark.svg'
import RregionIcon from '#/assets/m_regionIcon.svg'
import RregionIconDark from '#/assets/m_regionIconDark.svg'
import CpIcon from '#/assets/m_cpIcon.svg'
import CpIconDark from '#/assets/m_cpIconDark.svg'
import UserIcon from '#/assets/m_userIcon.svg'
import UserIconDark from '#/assets/m_userIconDark.svg'

import useLayoutStore from '#/store/useLayoutStore'
import { isMobile } from 'react-device-detect'

import style from './style.module'

function MainPage() {
    const { themeMode } = useLayoutStore()
    const countryMockData = [
        {
            lightIcon: <img src={EvIcon} />,
            darkIcon: <img src={EvIconDark} />,
            category: 'evCharging',
            count: '005',
        },
        {
            lightIcon: <img src={FuelIcon} />,
            darkIcon: <img src={FuelIconDark} />,
            category: 'fuel',
            count: '004',
        },
        {
            lightIcon: <img src={ParkingIcon} />,
            darkIcon: <img src={ParkingIconDark} />,
            category: 'parking',
            count: '003',
        },
        {
            lightIcon: <img src={H2Icon} />,
            darkIcon: <img src={H2IconDark} />,
            category: 'h2Charging',
            count: '002',
        },
        {
            lightIcon: <img src={DealerPoiIcon} />,
            darkIcon: <img src={DealerPoiIconDark} />,
            category: 'dealerPoi',
            count: '001',
        },
    ]

    const VectorMapMockData = [
        {
            lightIcon: <img src={EvIconLight} />,
            darkIcon: <img src={EvIconDark} width={22} />,
            category: 'evCharging',
            count: '001',
        },
        {
            lightIcon: <img src={FuelIconLight} />,
            darkIcon: <img src={FuelIconDark} width={22} />,
            category: 'fuel',
            count: '002',
        },
        {
            lightIcon: <img src={ParkingIconLight} />,
            darkIcon: <img src={ParkingIconDark} width={19} />,
            category: 'parking',
            count: '003',
        },
        {
            lightIcon: <img src={H2IconLight} />,
            darkIcon: <img src={H2IconDark} width={22} />,
            category: 'h2Charging',
            count: '004',
        },
        {
            lightIcon: <img src={DealerPoiIconLight} />,
            darkIcon: <img src={DealerPoiIconDark} width={22} />,
            category: 'dealerPoi',
            count: '005',
        },
    ]

    const shortCutMockData = [
        {
            title: '시간 별 통계',
            desc: 'MCP POI를 시간대 별로 확인 하실 수 있습니다.',
            path: '/',
            lightIcon: <img src={TimeIcon} />,
            darkIcon: <img src={TimeIconDark} />,
        },
        {
            title: '지역 별 통계',
            desc: 'MCP POI를 시간대 별로 확인 하실 수 있습니다.',
            path: '/',
            lightIcon: <img src={RregionIcon} />,
            darkIcon: <img src={RregionIconDark} />,
        },
        {
            title: 'CP 별 통계',
            desc: 'MCP POI를 시간대 별로 확인 하실 수 있습니다.',
            path: '/',
            lightIcon: <img src={CpIcon} />,
            darkIcon: <img src={CpIconDark} />,
        },
        {
            title: '사용자 별 통계',
            desc: 'MCP POI를 시간대 별로 확인 하실 수 있습니다.',
            path: '/',
            lightIcon: <img src={UserIcon} />,
            darkIcon: <img src={UserIconDark} />,
        },
    ]

    return (
        <Box>
            <Box sx={style.tooltipBox} style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                <UserTooltip />
                <CountryTooltip title={'Europe'} categoryCountList={countryMockData} />
            </Box>
            <Box sx={style.mapBox}>
                <VectorMap />
                <VectorMapTooltip categoryCountList={VectorMapMockData} title={'국가명'} />
            </Box>
            <Box sx={style.bannerBox} style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                {shortCutMockData.map((item, idx) => (
                    <ShortCutBanner
                        key={idx}
                        bannerTitle={item.title}
                        bannerDesc={item.desc}
                        path={item.path}
                        icon={themeMode === 'light' ? item.lightIcon : item.darkIcon}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default MainPage
