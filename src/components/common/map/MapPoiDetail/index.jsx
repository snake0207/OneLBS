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
import Divider from '@mui/material/Divider'
import BasicInfo from '#/components/common/map/MapGpssDetail/DetailTab/BasicInfo/index.jsx'
import { gpssDetailResponseDataMapper } from '#/pages/ApprovalHistoryPage/mapper.js'
import EvChargingInfo from '#/components/approval/Detail/CategoryInfo/EvChargingInfo/index.jsx'
import ParkingInfo from '#/components/approval/Detail/CategoryInfo/ParkingInfo/index.jsx'
import FuelInfo from '#/components/approval/Detail/CategoryInfo/FuelInfo/index.jsx'
import H2ChargingInfo from '#/components/approval/Detail/CategoryInfo/H2ChargingInfo/index.jsx'
import DealerPoiInfo from '#/components/approval/Detail/CategoryInfo/DealerPoiInfo/index.jsx'
import style from './style.module'

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
        poiData &&
        isOpen && (
            <Box sx={style.mapDetailBox}>
                <Box sx={style.mapDetail}>
                    {/* 상세 기본 정보 */}
                    <BasicInfo
                        poiData={parsedData.basicInfo}
                        tabSelected={'info'}
                        isEditable={isEditable}
                    />
                    {/* EV Charging */}
                    {!!parsedData.evChargingInfo && (
                        <Box>
                            <EvChargingInfo
                                data={parsedData.evChargingInfo}
                                isEditable={isEditable}
                            />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                    {/* parking */}
                    {!!parsedData.parkingInfo && (
                        <Box>
                            <ParkingInfo data={parsedData.parkingInfo} isEditable={isEditable} />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                    {/* fuel */}
                    {!!parsedData.fuelInfo && (
                        <Box>
                            <FuelInfo data={parsedData.fuelInfo} isEditable={isEditable} />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                    {/* h2Charging */}
                    {!!parsedData.h2ChargingInfo && (
                        <Box>
                            <H2ChargingInfo
                                data={parsedData.h2ChargingInfo}
                                isEditable={isEditable}
                            />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                    {/* dealerPoi */}
                    {!!parsedData.dealerPoiInfo && (
                        <Box>
                            <DealerPoiInfo
                                data={parsedData.dealerPoiInfo}
                                isEditable={isEditable}
                            />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                </Box>
                {isBrowser && (
                    <IconButton
                        variant={'contained'}
                        sx={{
                            inWidth: '20px',
                            minHeight: '20px',
                            width: '20px',
                            height: '20px',
                            ml: '4px',
                            color: 'text.close',
                            borderRadius: '35px',
                            backgroundColor: 'color.closeBg',
                            border: '1px solid',
                            borderColor: 'border.close',
                            boxShadow: '0 3px 14px rgb(0 0 0 / 20%)',
                            '&:hover': {
                                backgroundColor: 'color.closeBg',
                            },
                        }}
                        onClick={handleClickDetailClose}
                    >
                        <CloseIcon
                            sx={{ color: 'background.close', width: '13px', height: '13px' }}
                        />
                    </IconButton>
                )}
            </Box>
        )
    )
}

export default MapPoiDetail
