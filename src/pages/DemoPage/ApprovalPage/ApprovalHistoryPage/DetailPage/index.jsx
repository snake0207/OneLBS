import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import t from '#/common/libs/trans.js'
import TitleBar from '#/components/common/menu/TitleBar/index.jsx'
import { Box, Card, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import ApprovalLine from '#/components/approval/Detail/ApprovalLine/index.jsx'
import InfoTab from '#/components/approval/Detail/InfoTab/index.jsx'
import HistoryTable from '#/components/approval/Detail/HistoryTable/index.jsx'
import { useMemo } from 'react'
import { useFormik } from 'formik'
import CategoryTable from '#/components/approval/Detail/CategoryTable/index.jsx'
import ActionButtons from '#/components/approval/Detail/ActionButtons/index.jsx'
import dummyData from '../../detailData.json'
import Headline from '#/components/approval/Detail/Headline/index.jsx'
import Comment from '#/components/approval/Detail/Comment/index.jsx'
import { usePopupActions } from '#/store/usePopupStore.js'

const ApprovalHistoryDetailPage = () => {
    const params = useParams()
    const popupActions = usePopupActions()
    const userType = params.type // TODO: 전체이력 페이지면 all, 아니면 권한(url or token get..)
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            lat: '',
            lon: '',
            brand: '',
            request_reason: '위.경도 좌표 수정',
            reviewer_comment: dummyData.comment.reviewer,
            approver_comment: dummyData.comment.approver,
        },
    })

    const isEditable = useMemo(() => {
        switch (userType) {
            case 'requester':
                return !(dummyData.status === '검토완료' || dummyData.status === '승인완료')
            case 'reviewer':
                return dummyData.status === '검토요청'
            case 'approver':
                return dummyData.status === '검토완료'
            default:
                return false
        }
    })

    const confirmPopupFunction = (action) => {
        console.log('ACTION >> ', action, params.id)
        if (formik.values['request_reason'] === '') {
            popupActions.showPopup('alert', '승인 요청 이유를 입력해 주세요')
            return false
        } else {
            // TODO: 기능구분
            formik.handleSubmit
            return true
        }
    }

    return (
        <>
            <TitleBar title={t('detail', 'approval')} />
            <Card variant="outlined" sx={{ mt: 4, display: 'flex' }}>
                <Grid container xs={6} sx={{ p: 2, flexDirection: 'column', gap: 4 }}>
                    {/* 결제라인 */}
                    <ApprovalLine
                        status={dummyData.status}
                        content={dummyData.approvalLineContents}
                    />
                    {/* 정보 탭 */}
                    <InfoTab data={dummyData.info} formik={formik} isEditable={isEditable} />
                    {/* 카테고리 */}
                    <CategoryTable
                        data={dummyData.category}
                        formik={formik}
                        isEditable={isEditable}
                    />
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
                        confirmAction={confirmPopupFunction}
                        isEditable={isEditable}
                    />
                </Grid>

                {/* 지도 영역 */}
                <Grid
                    xs={6}
                    sx={{
                        minHeight: 700,
                        flex: 1,
                        backgroundColor: 'gray',
                        textAlign: 'center',
                    }}
                >
                    지도 영역
                </Grid>
            </Card>
        </>
    )
}

export default ApprovalHistoryDetailPage
