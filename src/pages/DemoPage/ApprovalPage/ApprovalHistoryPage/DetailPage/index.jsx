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
import dummyData from '../../detailData.json'
import poiDetailData from '../../poiDetailData.json'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import Comment from '#/components/approval/Detail/Comment/index.jsx'
import { usePopupActions } from '#/store/usePopupStore.js'
import { detailResponseDataMapper } from '#/pages/DemoPage/ApprovalPage/ApprovalHistoryPage/mapper.js'
import InfoTab from '#/components/approval/Detail/InfoTab/index.jsx'
import CategoryInfo from '#/components/approval/Detail/CategoryInfo/index.jsx'
import EvChargingInfo from '#/components/approval/Detail/CategoryInfo/EvChargingInfo/index.jsx'

const ApprovalHistoryDetailPage = () => {
    const params = useParams()
    const popupActions = usePopupActions()
    const userType = params.type // TODO: 전체이력 페이지면 all, 아니면 권한(url or token get..)
    const parsedData = detailResponseDataMapper(poiDetailData)

    // TODO: 추후 수정 api request 형식 확인해 {...parsedData}로 사용할 수 있을지 확인
    const categoryFormik = useCallback(
        (data) => {
            switch (parsedData.category) {
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
                        dealerInfo: {
                            type: data.dealerInfo.type || '',
                            manufacturer: data.dealerInfo.manufacturer || '',
                        },
                    }
            }
        },
        [parsedData.category],
    )

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
                        backgroundColor: '#fff',
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
                    {/*{category === 'fuel' && <EvChargingInfo />}*/}
                    {/*{category === 'parking' && <EvChargingInfo />}*/}
                    {/*{category === 'h2Charging' && <EvChargingInfo />}*/}
                    {/*{category === 'dealerPoi' && <EvChargingInfo />}*/}
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
                        height: '100%',
                        backgroundColor: 'gray',
                        textAlign: 'center',
                    }}
                >
                    지도 영역
                </Box>
            </Card>
        </>
    )
}

export default ApprovalHistoryDetailPage
