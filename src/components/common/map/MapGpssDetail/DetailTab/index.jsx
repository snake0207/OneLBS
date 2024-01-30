import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material'
import Divider from '@mui/material/Divider'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EvStationIcon from '@mui/icons-material/EvStation'
import EditIcon from '@mui/icons-material/Edit'
import { useFormik } from 'formik'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import SaveIcon from '@mui/icons-material/Save'
import TextInput from '#/components/common/input/TextInput/index.jsx'
import UserSearchTable from '#/components/common/map/MapGpssDetail/UserSearchTable/index.jsx'
import { GPSS_TABLE_TYPE } from '#/contents/constant.js'
import { useGetApprover, useGetReviewer } from '#/hooks/queries/gpss.js'
import { usePopupActions } from '#/store/usePopupStore.js'
import t from '#/common/libs/trans.js'

const dummyData = [
    { id: 'qwer@acrofuture.com', name: '아*로1', company: '회사1', userSeq: 1 },
    { id: 'asdf@acrofuture.com', name: '아*로2', company: '회사2', userSeq: 2 },
    { id: 'zxcv@acrofuture.com', name: '아*로3', company: '회사3', userSeq: 3 },
]

const MapGpssDetailTab = () => {
    const formik = useFormik({
        initialValues: {
            address: '',
            lat: '',
            lng: '',
            reason: '',
            reviewer: '',
            approver: '',
        },
        onSubmit: (form) => {
            console.log(form)
        },
    })
    const popupAction = usePopupActions()
    const { data: reviewerData, refetch: getReviewer } = useGetReviewer(formik.values.reviewer)
    const { data: approverData, refetch: getApprover } = useGetApprover(formik.values.approver)
    // 데이터 수정
    const [isAddressSave, setIsAddressSave] = useState(false)
    const [isLatSave, setIsLatSave] = useState(false)
    const [isLngSave, setIsLngSave] = useState(false)
    // 검토자 승인자 검색
    const [isReviewerSearchClick, setIsReviewerSearchClick] = useState(false)
    const [isApproverSearchClick, setIsApproverSearchClick] = useState(false)
    // 검토자 승인자 선택
    const [selectedReviewer, setSelectedReviewer] = useState(null)
    const [selectedApprover, setSelectedApprover] = useState(null)

    const handleClickSetAddressState = () => {
        setIsAddressSave(!isAddressSave)
    }
    const handleClickSetLatState = () => {
        setIsLatSave(!isLatSave)
    }
    const handleClickSetLngSate = () => {
        setIsLngSave(!isLngSave)
    }

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
        <Box sx={{ paddingTop: '16px' }}>
            <Box>
                <Typography variant={'h6'}>Times Square</Typography>
            </Box>
            <Divider />
            <Box sx={{ marginTop: '8px', marginBottom: '16px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <PlaceIcon />
                        </Box>
                        <Box>
                            <Typography>10036 New York, Manhattan, United States</Typography>
                        </Box>
                        <IconButton
                            sx={{
                                ml: 'auto',
                                minWidth: '15px',
                                width: '30px',
                                minHeight: '15px',
                                height: '30px',
                            }}
                            onClick={handleClickSetAddressState}
                        >
                            {isAddressSave ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    {(isAddressSave || (!isAddressSave && formik.values.address !== '')) && (
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'address'}
                                IsDisabled={!isAddressSave}
                                placeholder={t('address_input', 'gpss')}
                            />
                        </Box>
                    )}
                </Box>
                <Divider sx={{ marginY: '5px' }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <LanguageIcon />
                        </Box>
                        <Box>
                            <Typography>40.758077</Typography>
                        </Box>
                        <IconButton
                            sx={{
                                ml: 'auto',
                                minWidth: '15px',
                                width: '30px',
                                minHeight: '15px',
                                height: '30px',
                            }}
                            onClick={handleClickSetLatState}
                        >
                            {isLatSave ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    {(isLatSave || (!isLatSave && formik.values.lat !== '')) && (
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'lat'}
                                IsDisabled={!isLatSave}
                                placeholder={t('lat_input', 'gpss')}
                            />
                        </Box>
                    )}
                </Box>
                <Divider sx={{ marginY: '5px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ paddingTop: '5px' }}>
                            <LanguageIcon />
                        </Box>
                        <Box>
                            <Typography>-73.985480</Typography>
                        </Box>
                        <IconButton
                            sx={{
                                ml: 'auto',
                                minWidth: '15px',
                                width: '30px',
                                minHeight: '15px',
                                height: '30px',
                            }}
                            onClick={handleClickSetLngSate}
                        >
                            {isLngSave ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    {(isLngSave || (!isLngSave && formik.values.lng !== '')) && (
                        <Box sx={{ height: '40px' }}>
                            <TextInput
                                formik={formik}
                                name={'lng'}
                                IsDisabled={!isLngSave}
                                placeholder={t('lng_input', 'gpss')}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
            <Box>
                <Typography>{t('category', 'common')}</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', marginBottom: '16px' }}>
                <Accordion elevation={0} sx={{ padding: 0 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '0px' }}>
                        <EvStationIcon /> EV Charging
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box>
                <Box>
                    <Typography>{t('reason_for_approval', 'gpss')}</Typography>
                </Box>
                <Divider />
                <TextField
                    sx={{ marginBottom: '16px', marginTop: '8px' }}
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

            <Box sx={{ display: 'flex', justifyContent: 'end', gap: '6px' }}>
                <Button
                    variant={'contained'}
                    onClick={handleClickTempSaveBtn}
                    sx={{ whiteSpace: 'nowrap' }}
                >
                    {t('temporary_save', 'gpss')}
                </Button>
                <Button variant={'contained'} onClick={handleClickEditBtn}>
                    {t('edit_request', 'gpss')}
                </Button>
                <Button variant={'contained'} onClick={handleClickDeleteBtn}>
                    {t('delete_request', 'gpss')}
                </Button>
            </Box>
        </Box>
    )
}

export default MapGpssDetailTab
