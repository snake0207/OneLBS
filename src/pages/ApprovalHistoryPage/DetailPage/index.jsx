import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { Box, Stack, TextField } from '@mui/material'
import ApprovalLine from '#/components/approval/Detail/ApprovalLine/index.jsx'
import { useCallback, useMemo, useState } from 'react'
import { useFormik } from 'formik'
import ActionButtons from '#/components/approval/Detail/ActionButtons/index.jsx'
import poiDetailData from '#/mock/data/poiDetailData.json'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import Comment from '#/components/approval/Detail/Comment/index.jsx'
import { usePopupActions } from '#/store/usePopupStore.js'
import { detailResponseDataMapper } from '#/pages/ApprovalHistoryPage/mapper.js'
import InfoTab from '#/components/approval/Detail/InfoTab/index.jsx'
import { getUserTypeFromPath } from '#/common/libs/approvalParser.js'
import EvChargingInfo from '#/components/poiDetail/CategoryInfo/EvChargingInfo/index.jsx'
import FuelInfo from '#/components/poiDetail/CategoryInfo/FuelInfo/index.jsx'
import DealerPoiInfo from '#/components/poiDetail/CategoryInfo/DealerPoiInfo/index.jsx'
import H2ChargingInfo from '#/components/poiDetail/CategoryInfo/H2ChargingInfo/index.jsx'
import ParkingInfo from '#/components/poiDetail/CategoryInfo/ParkingInfo/index.jsx'
import GoogleMapComponent from '#/components/common/map/googleMap/index.jsx'
import ApprovalSelect from '#/components/poiDetail/ApprovalSelect/index.jsx'
import { isBrowser, isMobile } from 'react-device-detect'
import Divider from '@mui/material/Divider'
import Header1Depth from '#/layouts/Header1Depth/index.jsx'
import DetailHistoryTable from '#/components/approval/Detail/DetailHistoryTable/index.jsx'
import markerSampleData from '#/mock/data/poiMarker.json'

const ApprovalHistoryDetailPage = () => {
    const params = useParams()
    const popupActions = usePopupActions()
    const userType = getUserTypeFromPath(params.type)
    const parsedData = detailResponseDataMapper(poiDetailData)
    const [selectedReviewer, setSelectedReviewer] = useState(null)
    const [selectedApprover, setSelectedApprover] = useState(null)

    // TODO: 추후 수정 api request 형식 확인해 {...parsedData}로 사용할 수 있을지 확인
    const categoryFormik = useCallback((data) => {
        switch (data.category) {
            case 'evCharging':
                return {
                    evChargingInfo: {
                        brand: data.evChargingInfo?.brand || '',
                        parkingFee: data.evChargingInfo?.parkingFee || '',
                        openingHours: data.evChargingInfo?.openingHours || [],
                        chargers: data.evChargingInfo?.chargers || [],
                    },
                }
            case 'fuel':
                return {
                    fuelInfo: {
                        brand: data.fuelInfo.brand || '',
                        price: data.fuelInfo.price || [],
                        openingHours: data.fuelInfo.openingHours || [],
                    },
                }
            case 'parking':
                return {
                    parkingInfo: {
                        brand: data.parkingInfo.brand || '',
                        type: data.parkingInfo.type || '',
                        price: data.parkingInfo.price || [],
                        openingHours: data.parkingInfo.openingHours || [],
                        congestion: data.parkingInfo.congestion || '',
                    },
                }
            case 'h2Charging':
                return {
                    h2ChargingInfo: {
                        brand: data.h2ChargingInfo.brand || '',
                        openingHours: data.h2ChargingInfo.openingHours || [],
                        chargers: data.h2ChargingInfo.chargers || [],
                    },
                }
            case 'dealerPoi':
                return {
                    dealerPoiInfo: {
                        type: data.dealerPoiInfo.type || '',
                        manufacturer: data.dealerPoiInfo.manufacturer || '',
                    },
                }
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            ...parsedData.approvalInfo,
            ...parsedData.basicInfo,
            ...categoryFormik(parsedData),
        },
    })
    console.log('PARSED >> ', parsedData)
    console.log('FORMIK >> ', formik.values)

    const isEditable = useMemo(() => {
        switch (userType) {
            case 'requester':
                return (
                    parsedData.status === 'temporary' ||
                    parsedData.status === 'request' ||
                    parsedData.status === 'rejected_review'
                )
            case 'reviewer':
                return !(parsedData.status === 'temporary' || parsedData.status === 'approval')
            default:
                return false
        }
    }, [parsedData.status, userType])

    const openAlertPopup = (action) => {
        if (formik.values['requestComment'] === '')
            popupActions.showPopup('alert', '승인 요청 이유를 입력해 주세요')
        else {
            // TODO: 기능구분
            console.log('VALUES >> ', formik.values)
            popupActions.showPopup(
                'alert',
                t(`confirmed.${action.split('_')[0].toLowerCase()}`, 'approval'),
            )
            formik.handleSubmit
        }
    }

    const handleShowConfirmPopup = (action, id) => {
        console.log(action, t(`modal.${action}`, 'approval'), id)
        popupActions.showPopup(
            'confirm',
            t(`modal.${action.split('_')[0].toLowerCase()}`, 'approval'),
            () => openAlertPopup(action),
        )
    }

    return (
        <>
            {isMobile ? <Header1Depth /> : <TitleBar title={t('detail', 'approval')} />}
            <Box
                sx={{
                    position: 'relative',
                    height: 'calc(100vh - 120px)',
                    '@media (max-width:1024px)': {
                        height: '100%',
                    },
                }}
            >
                <Stack
                    sx={{
                        p: 2,
                        m: 2,
                        position: 'absolute',
                        backgroundColor: 'dialog.main',
                        opacity: '95%',
                        overflowY: 'auto',
                        height: 'calc(100% - 32px)',
                        zIndex: 2,
                        borderRadius: '8px',
                        boxShadow: '0 4px 4px rgb(0 0 0 / 25%)',
                        '@media (max-width:1024px)': {
                            position: 'relative',
                            borderRadius: '0',
                            boxShadow: 'none',
                            m: '-74px 0 0 0',
                            p: '0',
                            height: '100%',
                            overflowY: 'inherit',
                            opacity: '1',
                        },
                    }}
                >
                    {/* 결제라인 */}
                    <ApprovalLine
                        status={parsedData.status}
                        content={parsedData.approvalInfo.approvalLineContents}
                    />
                    {/* 유저할당 */}
                    {isEditable && (
                        <ApprovalSelect
                            formik={formik}
                            reviewerName={'approvalLineContents.reviewer.name'}
                            approverName={'approvalLineContents.approver.name'}
                            selectedApprover={selectedApprover}
                            setSelectedApprover={setSelectedApprover}
                            selectedReviewer={selectedReviewer}
                            setSelectedReviewer={setSelectedReviewer}
                            isReviewerShow={userType === 'requester'}
                        />
                    )}
                    {/* 정보 탭 */}
                    <InfoTab
                        basicData={parsedData.basicInfo}
                        formik={formik}
                        isEditable={isEditable}
                    />
                    {/* 카테고리 */}
                    {parsedData.category === 'evCharging' && (
                        <Box>
                            <EvChargingInfo
                                data={parsedData.evChargingInfo}
                                isEditable={isEditable}
                                formik={formik}
                            />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                    {parsedData.category === 'fuel' && (
                        <Box>
                            <FuelInfo
                                data={parsedData.fuelInfo}
                                isEditable={isEditable}
                                formik={formik}
                            />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                    {parsedData.category === 'parking' && (
                        <Box>
                            <ParkingInfo
                                data={parsedData.parkingInfo}
                                isEditable={isEditable}
                                formik={formik}
                            />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                    {parsedData.category === 'h2Charging' && (
                        <Box>
                            <H2ChargingInfo
                                data={parsedData.h2ChargingInfo}
                                isEditable={isEditable}
                                formik={formik}
                            />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                    {parsedData.category === 'dealerPoi' && (
                        <Box>
                            <DealerPoiInfo
                                data={parsedData.dealerPoiInfo}
                                isEditable={isEditable}
                                formik={formik}
                            />
                            <Divider
                                sx={{
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'border.lightgray',
                                }}
                            />
                        </Box>
                    )}
                    {/* 승인 요청 이유*/}
                    <Box sx={{ mt: '24px' }}>
                        <Headline title={t('request_reason', 'approval')} />
                        <Box>
                            {userType === 'requester' && isEditable ? (
                                <TextField
                                    id="outlined-multiline-static"
                                    name="requestComment"
                                    fullWidth
                                    hiddenLabel
                                    multiline
                                    rows={3}
                                    value={formik.values['requestComment']}
                                    onChange={formik.handleChange}
                                    sx={{ backgroundColor: 'form.main', borderRadius: '4px' }}
                                />
                            ) : (
                                <Typography>{formik.values['requestComment'] || '-'}</Typography>
                            )}
                        </Box>
                    </Box>
                    {/* Comment */}
                    <Comment userType={userType} isEditable={isEditable} formik={formik} />
                    {/* 이력 */}
                    <DetailHistoryTable historyList={parsedData.approvalInfo.historyList} />
                    {/* 버튼 */}
                    <Box sx={{ display: 'flex', mt: '30px' }}>
                        <ActionButtons
                            type={userType}
                            status={parsedData.status}
                            clickAction={handleShowConfirmPopup}
                            id={params.id}
                        />
                    </Box>
                </Stack>
                {/* 지도 영역 */}
                {isBrowser && <GoogleMapComponent markerDetailData={poiDetailData} />}
            </Box>
        </>
    )
}

export default ApprovalHistoryDetailPage
