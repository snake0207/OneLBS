import { Box, Button, TextField, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { FormikProvider, useFormik } from 'formik'
import { useState } from 'react'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import UserSearchTable from '#/components/common/map/MapGpssDetail/UserSearchTable/index.jsx'
import { GPSS_TABLE_TYPE } from '#/contents/constant.js'
import { useGetApprover, useGetReviewer } from '#/hooks/queries/gpss.js'
import { usePopupActions } from '#/store/usePopupStore.js'
import t from '#/common/libs/trans.js'
import EvCharging from '#/components/common/map/MapGpssDetail/DetailTab/EvCharging/index.jsx'
import BasicInfo from '#/components/common/map/MapGpssDetail/DetailTab/BasicInfo/index.jsx'
import { poiDetailSchema } from '#/contents/validationSchema.js'

import style from './style.module'

const dummyData = [
    { id: 'qwer@acrofuture.com', name: '아*로1', company: '회사1', userSeq: 1 },
    { id: 'asdf@acrofuture.com', name: '아*로2', company: '회사2', userSeq: 2 },
    { id: 'zxcv@acrofuture.com', name: '아*로3', company: '회사3', userSeq: 3 },
]

const MapGpssDetailTab = ({ poiData }) => {
    const popupAction = usePopupActions()
    const [initPoiData, setInitPoiData] = useState(poiData)
    const { evCharging, fuel, parking, h2Charging, dealerPoi } = poiData

    const formik = useFormik({
        initialValues: {
            reason: '',
            reviewer: '',
            approver: '',
            ...poiData,
        },
        validationSchema: poiDetailSchema,
        onSubmit: (form) => {
            console.log(form)
        },
    })

    const { data: reviewerData, refetch: getReviewer } = useGetReviewer(formik.values.reviewer)
    const { data: approverData, refetch: getApprover } = useGetApprover(formik.values.approver)

    // 검토자 승인자 검색
    const [isReviewerSearchClick, setIsReviewerSearchClick] = useState(false)
    const [isApproverSearchClick, setIsApproverSearchClick] = useState(false)
    // 검토자 승인자 선택
    const [selectedReviewer, setSelectedReviewer] = useState(null)
    const [selectedApprover, setSelectedApprover] = useState(null)

    // 검토자 검색
    const handleClickGetReviewer = () => {
        if (formik.values.reviewer === '') return
        setIsReviewerSearchClick(true)
        // getReviewer()
    }
    // 결제자 검색
    const handleClickGetApprover = () => {
        if (formik.values.approver === '') return
        setIsApproverSearchClick(true)
        // getApprover()
    }
    // 임시저장
    const handleClickTempSaveBtn = () => {
        formik.handleSubmit()
        popupAction.showPopup('confirm', t('pop_up.temporary_save', 'gpss'), gpssTempSave)
    }
    const gpssTempSave = () => {
        console.log('임시저장')
        popupAction.closePopup()
    }
    // 수정요청
    const handleClickEditBtn = () => {
        if (gpssRequestValidation()) {
            popupAction.showPopup('confirm', t('pop_up.edit_request', 'gpss'), gpssEdit)
        }
    }
    const gpssEdit = () => {
        console.log('수정요청')
        popupAction.closePopup()
    }
    // 삭제요청
    const handleClickDeleteBtn = () => {
        if (gpssRequestValidation())
            popupAction.showPopup('confirm', t('pop_up.delete_request', 'gpss'), gpssDelete)
    }
    const gpssDelete = () => {
        console.log('삭제요청')
        popupAction.closePopup()
    }

    const gpssRequestValidation = () => {
        if (formik.values.reason === '') {
            popupAction.showPopup('alert', t('pop_up.reason_required', 'gpss'))
            return false
        }
        if (!selectedReviewer) {
            popupAction.showPopup('alert', t('pop_up.reviewer_required', 'gpss'))
            return false
        }
        if (!selectedApprover) {
            popupAction.showPopup('alert', t('pop_up.approver_required', 'gpss'))
            return false
        }
        return true
    }

    return (
        <FormikProvider value={formik}>
            <Box
                sx={{
                    paddingTop: '16px',
                    // TODO maxHeight의 경우 샘플컴포넌트 구성을 위해 넣은 값입니다. 추후에 실제 적용시에는 지도가 한 화면을 가득 사용할 것이므로 알맞게 수정되어야합니다
                    maxHeight: '800px',
                    overflow: 'auto',
                }}
            >
                {/* 상세 기본 정보 */}
                <BasicInfo formik={formik} poiData={poiData} />
                <Box>
                    <Typography
                        sx={{ fontSize: 20, fontWeight: 600, mb: '4px', color: 'primary.blue' }}
                    >
                        {t('category', 'common')}
                    </Typography>
                </Box>
                {/* EV Charging */}
                {!!evCharging && <EvCharging evChargingData={evCharging} formik={formik} />}
                <Box>
                    <Box>
                        <Typography>{t('reason_for_approval', 'gpss')}</Typography>
                    </Box>
                    <Divider />
                    <TextField
                        sx={{
                            marginBottom: '16px',
                            marginTop: '8px',
                            backgroundColor: 'form.main',
                            borderRadius: '4px',
                        }}
                        size={'small'}
                        multiline
                        fullWidth
                        placeholder={t('reason_for_approval_input', 'gpss')}
                        name={'reason'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[name]}
                    ></TextField>
                </Box>
                <Box>
                    <Box>
                        <Typography>{t('reviewer', 'users')}</Typography>
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '6px',
                            mt: '8px',
                            height: '40px',
                        }}
                    >
                        <TextInput
                            formik={formik}
                            name={'reviewer'}
                            placeholder={t('input_keyword', 'common')}
                        />
                        <Button variant={'contained'} onClick={handleClickGetReviewer}>
                            {t('search', 'common')}
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            mt: '8px',
                        }}
                    >
                        {isReviewerSearchClick && (
                            <>
                                <Typography sx={{ marginY: '16px' }}>
                                    {t('search_no_result', 'common')}
                                </Typography>
                                <UserSearchTable
                                    data={dummyData}
                                    tableType={GPSS_TABLE_TYPE.reviewer}
                                    selectedReviewer={selectedReviewer}
                                    setSelectedReviewer={setSelectedReviewer}
                                />
                            </>
                        )}
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography>{t('approver', 'users')}</Typography>
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '6px',
                            mt: '8px',
                            height: '40px',
                        }}
                    >
                        <TextInput
                            formik={formik}
                            name={'approver'}
                            placeholder={t('input_keyword', 'common')}
                        />
                        <Button variant={'contained'} onClick={handleClickGetApprover}>
                            {t('search', 'common')}
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            mt: '8px',
                        }}
                    >
                        {isApproverSearchClick && (
                            <>
                                <Typography sx={{ marginY: '16px' }}>
                                    {t('search_no_result', 'common')}
                                </Typography>
                                <UserSearchTable
                                    data={dummyData}
                                    tableType={GPSS_TABLE_TYPE.approver}
                                    selectedApprover={selectedApprover}
                                    setSelectedApprover={setSelectedApprover}
                                />
                            </>
                        )}
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2px' }}>
                    <Button
                        variant={'contained'}
                        onClick={handleClickTempSaveBtn}
                        sx={style.blueButton}
                    >
                        {t('temporary_save', 'gpss')}
                    </Button>
                    <Button
                        variant={'contained'}
                        onClick={handleClickEditBtn}
                        sx={style.lightButton}
                    >
                        {t('edit_request', 'gpss')}
                    </Button>
                    <Button
                        variant={'contained'}
                        onClick={handleClickDeleteBtn}
                        sx={style.lineButton}
                    >
                        {t('delete_request', 'gpss')}
                    </Button>
                </Box>
            </Box>
        </FormikProvider>
    )
}

export default MapGpssDetailTab
