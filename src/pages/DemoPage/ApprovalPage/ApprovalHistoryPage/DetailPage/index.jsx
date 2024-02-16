import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { Box, Card, Stack, TextField } from '@mui/material'
import ApprovalLine from '#/components/approval/Detail/ApprovalLine/index.jsx'
import InfoTab from '#/components/approval/Detail/InfoTab/index.jsx'
import HistoryTable from '#/components/approval/Detail/HistoryTable/index.jsx'
import { useMemo, useRef } from 'react'
import { useFormik } from 'formik'
import ActionButtons from '#/components/approval/Detail/ActionButtons/index.jsx'
import dummyData from '../../detailData.json'
import poiDummyData from '../../poiDetailData.json'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import Comment from '#/components/approval/Detail/Comment/index.jsx'
import { usePopupActions } from '#/store/usePopupStore.js'
import CategoryInfo from '#/components/approval/Detail/CategoryInfo/index.jsx'

const ApprovalHistoryDetailPage = () => {
    const params = useParams()
    const popupActions = usePopupActions()
    const userType = params.type // TODO: 전체이력 페이지면 all, 아니면 권한(url or token get..)
    const dealerCategory = poiDummyData.result[0]
    const formik = useFormik({
        initialValues: {
            name: poiDummyData.result[0].title,
            address: poiDummyData.result[0].address,
            lat: poiDummyData.result[0].position.center.lat,
            lon: poiDummyData.result[0].position.center.lon,
            evCharging: {
                brand: poiDummyData.result[0].evCharging.brand,
                maxWatt: poiDummyData.result[0].evCharging.maxWatt,
                stationStatus: 0,
            },
            request_reason: '위.경도 좌표 수정',
            reviewer_comment: dummyData.comment.reviewer,
            approver_comment: dummyData.comment.approver,
        },
    })

    const isEditable = useMemo(() => {
        switch (userType) {
            case 'requester':
                return !(dummyData.status === 'reviewed' || dummyData.status === 'approved')
            case 'reviewer':
                return dummyData.status === 'request'
            case 'approver':
                return dummyData.status === 'reviewed'
            default:
                return false
        }
    }, [userType])

    const openAlertPopup = (action) => {
        if (formik.values['request_reason'] === '') {
            popupActions.showPopup('alert', '승인 요청 이유를 입력해 주세요')
        } else {
            // TODO: 기능구분
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
                    <InfoTab data={dummyData.info} formik={formik} isEditable={isEditable} />
                    {/* 카테고리 */}
                    <CategoryInfo data={dealerCategory} formik={formik} isEditable={isEditable} />
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
