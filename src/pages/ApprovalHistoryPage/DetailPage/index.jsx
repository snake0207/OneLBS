import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { Box, Stack, TextField } from '@mui/material'
import ApprovalLine from '#/components/approval/Detail/ApprovalLine/index.jsx'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useFormik } from 'formik'
import ActionButtons from '#/components/approval/Detail/ActionButtons/index.jsx'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import Comment from '#/components/approval/Detail/Comment/index.jsx'
import { usePopupActions } from '#/store/usePopupStore.js'
import { detailResponseDataMapper } from '#/pages/ApprovalHistoryPage/responseMapper.js'
import InfoTab from '#/components/approval/Detail/InfoTab/index.jsx'
import { getUserTypeFromPath } from '#/common/libs/approvalParser.js'
import EvChargingInfo from '#/components/poiDetail/CategoryInfo/EvChargingInfo/index.jsx'
import FuelInfo from '#/components/poiDetail/CategoryInfo/FuelInfo/index.jsx'
import DealerPoiInfo from '#/components/poiDetail/CategoryInfo/DealerPoiInfo/index.jsx'
import H2ChargingInfo from '#/components/poiDetail/CategoryInfo/H2ChargingInfo/index.jsx'
import ParkingInfo from '#/components/poiDetail/CategoryInfo/ParkingInfo/index.jsx'
import GoogleMapComponent from '#/components/common/map/googleMap/index.jsx'
import ApprovalSelect from '#/components/poiDetail/ApprovalSelect/index.jsx'
import { isBrowser } from 'react-device-detect'
import Divider from '@mui/material/Divider'
import DetailHistoryTable from '#/components/approval/Detail/DetailHistoryTable/index.jsx'
import { useGetHistoryDetail, usePostHistoryTempSave } from '#/hooks/queries/approval.js'
import { extractChangedObjectOfChangedJson } from '#/common/libs/objectCheck.js'
import { detailRequestDataMapper } from '#/pages/ApprovalHistoryPage/requestMapper.js'

const ApprovalHistoryDetailPage = () => {
    const params = useParams()
    const popupActions = usePopupActions()
    const userType = getUserTypeFromPath(params.type)
    const { data: detailData, isPending } = useGetHistoryDetail(parseInt(params.id)) // api data
    const [parsedData, setParsedData] = useState()
    const [selectedReviewer, setSelectedReviewer] = useState(null)
    const [selectedApprover, setSelectedApprover] = useState(null)
    const { mutate: tempSaveMutate, isPending: isTempSavePending } = usePostHistoryTempSave()

    useEffect(() => {
        if (!isPending && detailData) setParsedData(detailResponseDataMapper(detailData))
    }, [detailData])

    // TODO: 추후 수정 api request 형식 확인해 {...parsedData}로 사용할 수 있을지 확인
    const categoryFormik = useCallback((data) => {
        switch (data?.category) {
            case 'evCharging':
                return {
                    evCharging: {
                        brand: data.evCharging?.brand || '',
                        parkingFee: data.evCharging?.parkingFee ?? '',
                        chargers: data.evCharging?.chargers || [],
                    },
                }
            case 'fuel':
                return {
                    fuel: {
                        brand: data.fuel.brand || '',
                        price: data.fuel.price || [],
                    },
                }
            case 'parking':
                return {
                    parking: {
                        brand: data.parking.brand || '',
                        type: data.parking.type || '',
                        price: data.parking.price || [],
                        congestion: data.parking.congestion || '',
                    },
                }
            case 'h2Charging':
                return {
                    h2Charging: {
                        brand: data.h2Charging.brand || '',
                        chargers: data.h2Charging.chargers || [],
                    },
                }
            case 'dealerPoi':
                return {
                    dealerPoi: {
                        type: data.dealerPoi.type || '',
                        manufacturer: data.dealerPoi.manufacturer || '',
                    },
                }
        }
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ...parsedData?.approvalInfo,
            ...parsedData?.basicInfo,
            ...categoryFormik(parsedData),
        },
    })
    console.log('PARSED >> ', parsedData)
    console.log('FORMIK >> ', formik.values)

    const isEditable = useMemo(() => {
        if (!parsedData) return false
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
    }, [parsedData, userType])

    const requestByAction = (action) => {
        console.log('ACTION >> ', action)
        const changedValues = extractChangedObjectOfChangedJson(formik.initialValues, formik.values)
        const parsedValues = detailRequestDataMapper(params.id, changedValues)
        if (formik.values['requestComment'] === '')
            popupActions.showPopup('alert', '승인 요청 이유를 입력해 주세요')

        // TODO: 기능구분
        switch (action) {
            case 'temporary':
                temporarySaveAction(parsedValues)
                break
        }
    }

    const handleShowConfirmPopup = (action) => {
        console.log(action, t(`modal.${action}`, 'approval'))
        popupActions.showPopup(
            'confirm',
            t(`modal.${action.split('_')[0].toLowerCase()}`, 'approval'),
            () => requestByAction(action),
        )
    }

    const openAlertPopup = (action) => {
        popupActions.showPopup(
            'alert',
            t(`confirmed.${action.split('_')[0].toLowerCase()}`, 'approval'),
        )
    }

    const temporarySaveAction = (form) => {
        tempSaveMutate(
            { type: userType, data: form },
            {
                onSuccess: () => openAlertPopup('temporary'),
            },
        )
    }

    if (isPending) return
    return (
        <>
            {isBrowser && <TitleBar title={t('detail', 'approval')} />}
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
                        height: '98%',
                        zIndex: 2,
                        borderRadius: '8px',
                        boxShadow: '0 4px 4px rgb(0 0 0 / 25%)',
                        '@media (max-width:1024px)': {
                            position: 'relative',
                            borderRadius: '0',
                            boxShadow: 'none',
                            m: '0',
                            p: '0',
                            height: '100%',
                            overflowY: 'inherit',
                        },
                    }}
                >
                    {/* 결제라인 */}
                    <ApprovalLine
                        status={parsedData?.status}
                        content={parsedData?.approvalInfo.approvalLineContents}
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
                    {/*<InfoTab*/}
                    {/*    basicData={parsedData?.basicInfo}*/}
                    {/*    formik={formik}*/}
                    {/*    isEditable={isEditable}*/}
                    {/*/>*/}
                    {/* 카테고리 */}
                    {parsedData?.category === 'evCharging' && (
                        <Box>
                            <EvChargingInfo
                                data={parsedData?.evCharging}
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
                    {parsedData?.category === 'fuel' && (
                        <Box>
                            <FuelInfo
                                data={parsedData?.fuel}
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
                    {parsedData?.category === 'parking' && (
                        <Box>
                            <ParkingInfo
                                data={parsedData?.parking}
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
                    {parsedData?.category === 'h2Charging' && (
                        <Box>
                            <H2ChargingInfo
                                data={parsedData?.h2Charging}
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
                    {parsedData?.category === 'dealerPoi' && (
                        <Box>
                            <DealerPoiInfo
                                data={parsedData?.dealerPoi}
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
                    <DetailHistoryTable historyList={parsedData?.approvalInfo.historyList} />
                    {/* 버튼 */}
                    <Box>
                        <ActionButtons
                            type={userType}
                            status={parsedData?.status}
                            clickAction={handleShowConfirmPopup}
                        />
                    </Box>
                </Stack>
                {/* 지도 영역 */}
                {isBrowser && <GoogleMapComponent markerDetailData={parsedData} />}
            </Box>
        </>
    )
}

export default ApprovalHistoryDetailPage
