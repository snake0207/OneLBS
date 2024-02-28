import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { Box, Card, Stack, TextField } from '@mui/material'
import ApprovalLine from '#/components/approval/Detail/ApprovalLine/index.jsx'
import HistoryTable from '#/components/approval/Detail/HistoryTable/index.jsx'
import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import ActionButtons from '#/components/approval/Detail/ActionButtons/index.jsx'
import dummyData from '#/mock/data/detailData.json'
import poiDetailData from '#/mock/data/poiDetailData.json'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import Comment from '#/components/approval/Detail/Comment/index.jsx'
import { usePopupActions } from '#/store/usePopupStore.js'
import { detailResponseDataMapper } from '#/pages/ApprovalHistoryPage/mapper.js'
import InfoTab from '#/components/approval/Detail/InfoTab/index.jsx'
import EvChargingInfo from '#/components/approval/Detail/CategoryInfo/EvChargingInfo/index.jsx'
import { getUserTypeFromPath } from '#/common/libs/approvalParser.js'
import FuelInfo from '#/components/approval/Detail/CategoryInfo/FuelInfo/index.jsx'
import DealerPoiInfo from '#/components/approval/Detail/CategoryInfo/DealerPoiInfo/index.jsx'
import H2ChargingInfo from '#/components/approval/Detail/CategoryInfo/H2ChargingInfo/index.jsx'
import GoogleMapComponent from '#/components/common/map/googleMap/index.jsx'

const markerSampleData = [
    {
        poiId: 'ChIJsTbYQbjLwoARpbZRYUbnEP4',
        address: '12021 Wilmington Ave, Los Angeles, CA 90059, USA',
        position: {
            center: {
                lat: 33.9243791,
                lon: -118.23941569999998,
            },
        },
        title: 'PowerFlex Charging Station',
        category: 'ev',
    },
]

const ApprovalHistoryDetailPage = () => {
    const params = useParams()
    const popupActions = usePopupActions()
    const userType = getUserTypeFromPath(params.type) // TODO: 전체이력 페이지면 all, 아니면 권한(url or token get..)
    const parsedData = detailResponseDataMapper(poiDetailData)

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
            ...parsedData.coordinates,
            ...categoryFormik(parsedData),
        },
    })
    console.log('PARSED >> ', parsedData)
    console.log('FORMIK >> ', formik.values)

    const isEditable = useMemo(() => {
        switch (userType) {
            case 'requester':
                return !(parsedData.status === 'reviewed' || parsedData.status === 'approved')
            case 'reviewer':
                return parsedData.status === 'request'
            case 'approver':
                return parsedData.status === 'reviewed'
            default:
                return false
        }
    }, [parsedData.status, userType])

    const openAlertPopup = (action) => {
        if (formik.values['request_reason'] === '') {
            popupActions.showPopup('alert', '승인 요청 이유를 입력해 주세요')
        } else {
            // TODO: 기능구분
            console.log('VALUES >> ', formik.values)
            popupActions.showPopup('alert', t(`confirmed.${action.toLowerCase()}`, 'approval'))
            formik.handleSubmit
        }
    }

    const handleShowConfirmPopup = (action, id) => {
        console.log(action, t(`modal.${action}`, 'approval'), id)
        popupActions.showPopup('confirm', t(`modal.${action.toLowerCase()}`, 'approval'), () =>
            openAlertPopup(action),
        )
    }

    return (
        <>
            <TitleBar title={t('detail', 'approval')} />
            <Card variant="outlined" sx={{ mt: 4, position: 'relative', height: '45rem' }}>
                <Stack
                    sx={{
                        p: 2,
                        m: 2,
                        gap: 4,
                        position: 'absolute',
                        backgroundColor: 'dialog.main',
                        opacity: '95%',
                        overflowY: 'auto',
                        height: '100%',
                    }}
                >
                    {/* 결제라인 */}
                    <ApprovalLine
                        status={dummyData.status}
                        content={dummyData.approvalLineContents}
                    />
                    {/* 정보 탭 */}
                    {/*<BasicInfo formik={formik} poiData={parsedData.basicInfo} />*/}
                    <InfoTab
                        basicData={parsedData.basicInfo}
                        coordData={parsedData.coordinates}
                        formik={formik}
                        isEditable={isEditable}
                    />
                    {/* 카테고리 */}
                    <Headline title={t('category', 'approval')} />
                    {parsedData.category === 'evCharging' && (
                        <EvChargingInfo
                            data={parsedData.evChargingInfo}
                            isEditable={isEditable}
                            formik={formik}
                        />
                    )}
                    {parsedData.category === 'fuel' && (
                        <FuelInfo
                            data={parsedData.fuelInfo}
                            isEditable={isEditable}
                            formik={formik}
                        />
                    )}
                    {/*{parsedData.category === 'parking' && (*/}
                    {/*    <H2Charging*/}
                    {/*        data={parsedData.h2ChargingInfo}*/}
                    {/*        isEditable={isEditable}*/}
                    {/*        formik={formik}*/}
                    {/*    />*/}
                    {/*)}*/}
                    {parsedData.category === 'h2Charging' && (
                        <H2ChargingInfo
                            data={parsedData.h2ChargingInfo}
                            isEditable={isEditable}
                            formik={formik}
                        />
                    )}
                    {parsedData.category === 'dealerPoi' && (
                        <DealerPoiInfo
                            data={parsedData.dealerPoiInfo}
                            isEditable={isEditable}
                            formik={formik}
                        />
                    )}
                    {/*<CategoryInfo*/}
                    {/*    category={parsedData.category}*/}
                    {/*    data={parsedData[`${parsedData.category}Info`]}*/}
                    {/*    formik={formik}*/}
                    {/*    isEditable={isEditable}*/}
                    {/*/>*/}
                    {/* 승인 요청 이유*/}
                    <Box>
                        <Headline title={t('request_reason', 'approval')} />
                        <Box>
                            {userType === 'requester' && isEditable ? (
                                <TextField
                                    id="outlined-multiline-static"
                                    name="request_reason"
                                    fullWidth
                                    hiddenLabel
                                    multiline
                                    rows={3}
                                    value={formik.values['request_reason']}
                                    onChange={formik.handleChange}
                                    sx={{ backgroundColor: 'form.main', borderRadius: '4px' }}
                                />
                            ) : (
                                <Typography>{formik.values['request_reason']}</Typography>
                            )}
                        </Box>
                    </Box>
                    {/* Comment */}
                    <Comment
                        comments={dummyData.comment}
                        userType={userType}
                        isEditable={isEditable}
                        formik={formik}
                    />
                    {/* 이력 */}
                    <HistoryTable historyList={dummyData.historyList} />
                    {/* 버튼 */}
                    <ActionButtons
                        type={userType}
                        status={dummyData.status}
                        clickAction={handleShowConfirmPopup}
                        id={params.id}
                    />
                </Stack>

                {/* 지도 영역 */}
                <Box
                    sx={{
                        width: '100%',
                        height: 'calc(100vh - 120px)',
                    }}
                >
                    <GoogleMapComponent markerDataArr={markerSampleData} />
                </Box>
            </Card>
        </>
    )
}

export default ApprovalHistoryDetailPage
