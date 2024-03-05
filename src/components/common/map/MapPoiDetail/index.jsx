import { Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import PointBlueEVIcon from '#/assets/pointBlueEVIcon.svg'
import LanguageIcon from '#/assets/languagesIcon.svg'
import LanguageIconDark from '#/assets/languagesIconDark.svg'
import GpsIcon from '#/assets/gpsIcon.svg'
import GpsIconDark from '#/assets/gpsIconDark.svg'
import EvStationIcon from '#/assets/evStationIcon.svg'
import EvStationIconDark from '#/assets/evStationIconDark.svg'
import { getLayoutState } from '#/store/useLayoutStore'
import { isBrowser } from 'react-device-detect'
import BasicInfo from '#/components/common/map/MapGpssDetail/DetailTab/BasicInfo/index.jsx'
import { gpssDetailResponseDataMapper } from '#/pages/ApprovalHistoryPage/mapper.js'
import EvChargingInfo from '#/components/approval/Detail/CategoryInfo/EvChargingInfo/index.jsx'
import ParkingInfo from '#/components/approval/Detail/CategoryInfo/ParkingInfo/index.jsx'
import FuelInfo from '#/components/approval/Detail/CategoryInfo/FuelInfo/index.jsx'
import H2ChargingInfo from '#/components/approval/Detail/CategoryInfo/H2ChargingInfo/index.jsx'
import DealerPoiInfo from '#/components/approval/Detail/CategoryInfo/DealerPoiInfo/index.jsx'

const MapPoiDetail = ({ selectedPoi, setSelectedPoi, poiData }) => {
    const isEditable = false
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (!isBrowser) {
            setIsOpen(true)
            return
        }
        if (selectedPoi) setIsOpen(true)
        else setIsOpen(false)
    }, [selectedPoi])
    console.log(poiData)
    const parsedData = gpssDetailResponseDataMapper(poiData)
    const handleClickDetailClose = () => {
        setIsOpen(false)
        setSelectedPoi(null)
    }
    return (
        isOpen && (
            <Box sx={{ display: 'flex', margin: '10px' }}>
                <Box
                    sx={{
                        width: '350px',
                        maxHeight: '797px',
                        overflow: 'auto',
                        paddingTop: '16px',
                        padding: '20px 16px 16px 16px',
                        borderRadius: '0 0 8px 8px',
                        backgroundColor: 'dialog.main',
                        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                    }}
                >
                    {/* 상세 기본 정보 */}
                    <BasicInfo
                        poiData={parsedData.basicInfo}
                        tabSelected={'info'}
                        isEditable={isEditable}
                    />
                    {/* EV Charging */}
                    {!!parsedData.evChargingInfo && (
                        <EvChargingInfo data={parsedData.evChargingInfo} isEditable={isEditable} />
                    )}
                    {/* parking */}
                    {!!parsedData.parkingInfo && (
                        <ParkingInfo data={parsedData.parkingInfo} isEditable={isEditable} />
                    )}
                    {/* fuel */}
                    {!!parsedData.fuelInfo && (
                        <FuelInfo data={parsedData.fuelInfo} isEditable={isEditable} />
                    )}
                    {/* h2Charging */}
                    {!!parsedData.h2ChargingInfo && (
                        <H2ChargingInfo data={parsedData.h2ChargingInfo} isEditable={isEditable} />
                    )}
                    {/* dealerPoi */}
                    {!!parsedData.dealerPoiInfo && (
                        <DealerPoiInfo data={parsedData.dealerPoiInfo} isEditable={isEditable} />
                    )}
                </Box>
                {isBrowser && (
                    <IconButton
                        variant={'contained'}
                        sx={{
                            minWidth: '22px',
                            minHeight: '22px',
                            width: '35px',
                            height: '35px',
                        }}
                        onClick={handleClickDetailClose}
                    >
                        <CloseIcon sx={{ color: 'background.close' }} />
                    </IconButton>
                )}
            </Box>
        )
    )
}

export default MapPoiDetail
